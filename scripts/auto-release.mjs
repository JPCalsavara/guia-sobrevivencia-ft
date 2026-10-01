import { execSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

function run(command) {
  return execSync(command, { encoding: 'utf-8' }).trim();
}

function getCurrentBranch() {
  return run('git rev-parse --abbrev-ref HEAD');
}

function getLatestTag() {
  try {
    return run('git describe --tags --abbrev=0');
  } catch {
    return null;
  }
}

function determineBumpType(commitsLog, mergeSubject) {
  const combined = (commitsLog + '\n' + mergeSubject).toLowerCase();

  if (
    combined.includes('breaking change') ||
    combined.includes('major:') ||
    combined.includes('breaking/') ||
    combined.includes('major/')
  ) {
    return 'major';
  }

  if (
    combined.includes('feat:') ||
    combined.includes('feature:') ||
    combined.includes('feature/') ||
    combined.includes('feat/')
  ) {
    return 'minor';
  }

  return 'patch';
}

function bumpVersion(currentVersion, bumpType) {
  const cleaned = currentVersion.replace(/^v/, '');
  const parts = cleaned.split('.').map((num) => parseInt(num, 10));
  let major = parts[0] || 1;
  let minor = parts[1] || 0;
  let patch = parts[2] || 0;

  if (bumpType === 'major') {
    major += 1;
    minor = 0;
    patch = 0;
  } else if (bumpType === 'minor') {
    minor += 1;
    patch = 0;
  } else {
    patch += 1;
  }

  return `${major}.${minor}.${patch}`;
}

export function autoRelease() {
  const branch = getCurrentBranch();

  if (branch !== 'main') {
    console.log(`Branch atual ${branch} nao e main. Automacao de release ignorada.`);
    return;
  }

  const latestTag = getLatestTag();

  if (!latestTag) {
    console.log('Nenhuma tag anterior encontrada. Tag inicial v1.0.0 recomendada.');
    return;
  }

  let commitsSinceTag = '';
  try {
    commitsSinceTag = run(`git log ${latestTag}..HEAD --pretty=format:"%s %b"`);
  } catch {
    commitsSinceTag = '';
  }

  if (!commitsSinceTag) {
    console.log(`Nenhuma nova comissao encontrada desde ${latestTag}. Nenhum release necessario.`);
    return;
  }

  let latestMergeSubject = '';
  try {
    latestMergeSubject = run('git log -1 --pretty=format:"%s"');
  } catch {
    latestMergeSubject = '';
  }

  const bumpType = determineBumpType(commitsSinceTag, latestMergeSubject);
  const newVersion = bumpVersion(latestTag, bumpType);
  const newTag = `v${newVersion}`;

  console.log(`Ultima tag: ${latestTag}`);
  console.log(`Tipo de incremento detectado: ${bumpType}`);
  console.log(`Nova versao calculada: ${newTag}`);

  const packageJsonPath = resolve(process.cwd(), 'package.json');
  const packageJsonContent = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));
  packageJsonContent.version = newVersion;
  writeFileSync(packageJsonPath, JSON.stringify(packageJsonContent, null, 2) + '\n');

  try {
    run('git add package.json');
    run(`ALLOW_MAIN_COMMIT=1 git commit -m "chore: atualizar versao no package.json para ${newTag}"`);
  } catch {
    console.log('Arquivo package.json ja se encontrava atualizado.');
  }

  const tagMessage = `release: versao ${newVersion} gerada automaticamente via git-flow`;
  run(`git tag -a ${newTag} -m "${tagMessage}"`);

  console.log(`Release ${newTag} criado e tagueado com sucesso!`);
}

if (process.argv[1] && process.argv[1].endsWith('auto-release.mjs')) {
  autoRelease();
}
