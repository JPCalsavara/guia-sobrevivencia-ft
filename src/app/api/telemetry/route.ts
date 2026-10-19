import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export interface TelemetryPayload {
  topicId: string;
  topicTitle: string;
  dwellTimeSeconds: number;
  isMobile: boolean;
  scrollDepthPct: number;
  interacted: boolean;
  interactionType?: string;
  timestamp?: string;
}

const DATA_DIR = path.resolve(process.cwd(), 'data');
const DATA_FILE = path.join(DATA_DIR, 'telemetry_events.json');

export async function POST(req: Request) {
  try {
    const body: TelemetryPayload = await req.json();

    if (!body.topicId || typeof body.dwellTimeSeconds !== 'number') {
      return NextResponse.json({ error: 'Dados invalidos' }, { status: 400 });
    }

    const eventRecord = {
      ...body,
      timestamp: body.timestamp || new Date().toISOString(),
    };

    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }

    let currentEvents: TelemetryPayload[] = [];
    if (fs.existsSync(DATA_FILE)) {
      try {
        const rawContent = fs.readFileSync(DATA_FILE, 'utf8');
        currentEvents = rawContent ? JSON.parse(rawContent) : [];
      } catch {
        currentEvents = [];
      }
    }

    currentEvents.push(eventRecord);

    // Limite maximo de segurança para evitar crescimento indefinido
    if (currentEvents.length > 5000) {
      currentEvents = currentEvents.slice(-5000);
    }

    fs.writeFileSync(DATA_FILE, JSON.stringify(currentEvents, null, 2), 'utf8');

    return NextResponse.json({ success: true, count: currentEvents.length });
  } catch (err) {
    return NextResponse.json({ error: 'Falha ao registrar telemetria' }, { status: 500 });
  }
}

export async function GET() {
  try {
    if (!fs.existsSync(DATA_FILE)) {
      return NextResponse.json({ total: 0, events: [] });
    }
    const rawContent = fs.readFileSync(DATA_FILE, 'utf8');
    const events = rawContent ? JSON.parse(rawContent) : [];
    return NextResponse.json({ total: events.length, events });
  } catch {
    return NextResponse.json({ total: 0, events: [] });
  }
}
