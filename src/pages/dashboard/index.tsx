import { PageLayout } from "@/layouts";

// Sussurro (fork do Pluely v0.1.9): painel sem integração com a API/licença do Pluely oficial.
// Configure seus provedores (IA e transcrição) na aba de configurações de Dev Space.
const Dashboard = () => {
  return (
    <PageLayout
      title="Painel"
      description="Sussurro: use suas próprias chaves de IA e transcrição. Configure os provedores no Dev Space."
    >
      <div className="text-sm text-muted-foreground space-y-2">
        <p>1. Abra o Dev Space e escolha o provedor de IA (ex.: Anthropic/Claude) e cole sua chave.</p>
        <p>2. Escolha o provedor de transcrição (ex.: Deepgram) e cole sua chave.</p>
        <p>3. Na barra flutuante, ligue a captura do áudio do sistema e comece a call.</p>
      </div>
    </PageLayout>
  );
};

export default Dashboard;
