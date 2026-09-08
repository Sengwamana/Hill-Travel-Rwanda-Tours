import { DESTINATIONS } from '../content/destinations';
import { SERVICES } from '../content/services';
import { EXPERIENCES } from '../content/experiences';
import { PROJECT_LABELS } from '../utils/site';
import { EVENT_TYPES } from '../utils/events';

const catalogs = {
  destinations: DESTINATIONS as unknown as Record<string, unknown>,
  services: SERVICES as unknown as Record<string, unknown>,
  experiences: EXPERIENCES as unknown as Record<string, unknown>,
  projects: PROJECT_LABELS as unknown as Record<string, unknown>,
};

const kinds = ['destinations', 'services', 'experiences', 'projects'] as const;

let failed = false;

for (const event of EVENT_TYPES) {
  for (const kind of kinds) {
    for (const slug of event[kind]) {
      if (!(slug in catalogs[kind])) {
        failed = true;
        console.error(`[ERROR] Event "${event.slug}" references unknown ${kind} slug "${slug}"`);
      }
    }
  }
}

for (const kind of kinds) {
  const used = new Set<string>();
  for (const event of EVENT_TYPES) {
    for (const slug of event[kind]) used.add(slug);
  }
  for (const slug of Object.keys(catalogs[kind])) {
    if (!used.has(slug)) {
      console.warn(`[WARN] ${kind} "${slug}" is not referenced by any event`);
    }
  }
}

if (failed) {
  console.error('\nData integrity check FAILED — fix the errors above.');
  process.exit(1);
}

const totals = kinds.map((k) => `${Object.keys(catalogs[k]).length} ${k}`).join(', ');
console.log(`Data integrity OK — all event references resolve. (${totals})`);