import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export interface DuvidaSubmissionPayload {
  nome?: string;
  email: string;
  categoria: string;
  pergunta: string;
  timestamp?: string;
}

const DATA_DIR = path.resolve(process.cwd(), 'data');
const DUVIDAS_FILE = path.join(DATA_DIR, 'duvidas_submissoes.json');
const DESTINATION_EMAIL = 'j197837@dac.unicamp.br';

export async function POST(req: Request) {
  try {
    const body: DuvidaSubmissionPayload = await req.json();

    const emailLimpo = (body.email || '').trim();
    const perguntaLimpa = (body.pergunta || '').trim();
    const categoriaLimpa = (body.categoria || 'Geral').trim();
    const nomeLimpo = (body.nome || 'Estudante').trim();

    if (!emailLimpo || !perguntaLimpa) {
      return NextResponse.json(
        { error: 'Email e pergunta sao campos obrigatorios' },
        { status: 400 }
      );
    }

    if (perguntaLimpa.length < 10) {
      return NextResponse.json(
        { error: 'A pergunta deve conter ao menos dez caracteres' },
        { status: 400 }
      );
    }

    const agora = new Date().toISOString();
    const registroDuvida = {
      id: `duvida_${Date.now()}`,
      nome: nomeLimpo,
      email: emailLimpo,
      categoria: categoriaLimpa,
      pergunta: perguntaLimpa,
      destinatario: DESTINATION_EMAIL,
      timestamp: agora,
      status: 'pendente'
    };

    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }

    let submissoesAtuais = [];
    if (fs.existsSync(DUVIDAS_FILE)) {
      try {
        const raw = fs.readFileSync(DUVIDAS_FILE, 'utf8');
        submissoesAtuais = raw ? JSON.parse(raw) : [];
      } catch {
        submissoesAtuais = [];
      }
    }

    submissoesAtuais.push(registroDuvida);
    fs.writeFileSync(DUVIDAS_FILE, JSON.stringify(submissoesAtuais, null, 2), 'utf8');

    let emailEnviado = false;
    const resendApiKey = process.env.RESEND_API_KEY;

    if (resendApiKey) {
      try {
        const emailResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: 'Guia FT <onboarding@resend.dev>',
            to: [DESTINATION_EMAIL],
            reply_to: emailLimpo,
            subject: `Duvida Guia FT: [${categoriaLimpa}] de ${nomeLimpo}`,
            text: `Nova duvida recebida pelo Guia FT\n\nNome: ${nomeLimpo}\nEmail do estudante: ${emailLimpo}\nCategoria: ${categoriaLimpa}\nData: ${agora}\n\nPergunta:\n${perguntaLimpa}\n\nPara responder basta responder diretamente a este email.`,
            html: `
              <h2>Nova Duvida Registrada no Guia FT</h2>
              <p><strong>Nome:</strong> ${nomeLimpo}</p>
              <p><strong>Email do estudante:</strong> <a href="mailto:${emailLimpo}">${emailLimpo}</a></p>
              <p><strong>Categoria:</strong> ${categoriaLimpa}</p>
              <p><strong>Data de Envio:</strong> ${agora}</p>
              <hr />
              <h3>Pergunta:</h3>
              <p style="white-space: pre-wrap; background: #f4f4f4; padding: 12px; border-radius: 6px;">${perguntaLimpa}</p>
              <hr />
              <p><small>Este email foi gerado pelo portal Guia FT. Clique em responder para contatar diretamente o estudante.</small></p>
            `
          })
        });

        if (emailResponse.ok) {
          emailEnviado = true;
        }
      } catch (err) {
        console.error('Falha no despacho de email via Resend:', err);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Duvida recebida e registrada com sucesso',
      emailEnviado,
      destinatario: DESTINATION_EMAIL,
      protocolo: registroDuvida.id
    });
  } catch (err) {
    return NextResponse.json(
      { error: 'Falha interna ao processar envio da duvida' },
      { status: 500 }
    );
  }
}
