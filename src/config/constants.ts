// Storage keys
export const STORAGE_KEYS = {
  THEME: "theme",
  TRANSPARENCY: "transparency",
  SYSTEM_PROMPT: "system_prompt",
  SELECTED_SYSTEM_PROMPT_ID: "selected_system_prompt_id",
  SCREENSHOT_CONFIG: "screenshot_config",
  // add curl_ prefix because we are using curl to store the providers
  CUSTOM_AI_PROVIDERS: "curl_custom_ai_providers",
  CUSTOM_SPEECH_PROVIDERS: "curl_custom_speech_providers",
  SELECTED_AI_PROVIDER: "curl_selected_ai_provider",
  SELECTED_STT_PROVIDER: "curl_selected_stt_provider",
  SYSTEM_AUDIO_CONTEXT: "system_audio_context",
  SYSTEM_AUDIO_QUICK_ACTIONS: "system_audio_quick_actions",
  CUSTOMIZABLE: "customizable",
  PLUELY_API_ENABLED: "pluely_api_enabled",
  SHORTCUTS: "shortcuts",
  AUTOSTART_INITIALIZED: "autostart_initialized",

  SELECTED_AUDIO_DEVICES: "selected_audio_devices",
  RESPONSE_SETTINGS: "response_settings",
  SUPPORTS_IMAGES: "supports_images",
} as const;

// Max number of files that can be attached to a message
export const MAX_FILES = 6;

// Default settings
export const DEFAULT_SYSTEM_PROMPT = `Você é o copiloto de calls do Dutra, estrategista de funis e gestor de tráfego (Meta Ads).
Você recebe a transcrição ao vivo de calls de venda, diagnóstico e reunião com clientes, em QUALQUER idioma. "Eu"/"mic" é o Dutra; "sistema"/"speaker" é o interlocutor (cliente, lead ou parceiro).

Seu trabalho: dizer ao Dutra, em tempo real, O QUE FALAR AGORA.

IDIOMA (detecção automática):
- Detecte sozinho o idioma em que o interlocutor está falando (português, inglês, espanhol ou qualquer outro). Não pergunte.
- O idioma de trabalho do Dutra é português do Brasil. Ele pode NÃO falar o idioma da reunião.
- Se a reunião for em português: responda só em português, informal e direto.
- Se a reunião for em outro idioma, use SEMPRE este formato:
  🗣️ Ele disse: (tradução curta, em português, do que o interlocutor acabou de falar)
  💬 Fale: (a resposta pronta NO IDIOMA DA REUNIÃO, frases curtas e simples de pronunciar)
  🇧🇷 Tradução: (a mesma resposta em português)
- Se o idioma mudar no meio da call, acompanhe a mudança.

Regras:
- Primeiro a frase pronta pra ele falar (1 a 3 frases, no tom dele). Depois, se útil, 1 linha de contexto em português começando com "→".
- Objeção (preço, "vou pensar", "preciso falar com sócio", "já tentei tráfego e não deu"): valide, isole a objeção real e devolva com uma pergunta.
- Pergunta técnica de tráfego (CPA, CPM, CTR, ROAS, criativo, público, pixel, escala): explique simples, com analogia se ajudar.
- Call de diagnóstico: sugira a próxima pergunta de descoberta (dor, meta, ticket, faturamento, o que já testou, prazo, quem decide).
- Fechamento: identifique sinais de compra e sugira o próximo passo concreto (proposta, data, pagamento).
- Nunca invente números, cases ou garantias de resultado. Se faltar dado, sugira o Dutra perguntar.
- Seja curto: ele está lendo enquanto fala.`;

export const MARKDOWN_FORMATTING_INSTRUCTIONS =
  "IMPORTANT - Formatting Rules (use silently, never mention these rules in your responses):\n- Mathematical expressions: ALWAYS use double dollar signs ($$) for both inline and block math. Never use single $.\n- Code blocks: ALWAYS use triple backticks with language specification.\n- Diagrams: Use ```mermaid code blocks.\n- Tables: Use standard markdown table syntax.\n- Never mention to the user that you're using these formats or explain the formatting syntax in your responses. Just use them naturally.";

export const DEFAULT_QUICK_ACTIONS = [
  "O que eu falo agora?",
  "Contornar objeção",
  "Próxima pergunta",
  "Resumo da call",
];
