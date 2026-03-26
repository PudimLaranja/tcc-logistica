import type { ReactNode } from "react";
import { Message } from "../../components/message";
import Cozinha from "../../assets/cozinha";
import Highlight from "../../components/highlight";
import { 
    Precos, 
    preco_total
} from "../../global";

function Estrategia(): ReactNode {

    const valorFinalEvento = preco_total;

    return (
        <div className="flex flex-col gap-4">
            <Message user={4}>
                Mas como vai funcionar a estratégia pra tudo isso na prática?
            </Message>

            <Message user={2}>
                Bom, resumindo a nossa conversa, dá para concluir o seguinte fluxo:
                <ol className="list-decimal ml-10 mt-2 space-y-2">
                    <li>
                        Primeiro, reunimos a equipe. Os cozinheiros e ajudantes montam a estrutura no local.
                    </li>
                    <li>
                        A produção das massas ocorre previamente. Elas são levadas resfriadas ou congeladas para manter o padrão durante as 5 horas de evento.
                    </li>
                    <li>
                        Com o caminhão alugado, transportamos tudo às 9:00h para garantir <Highlight>3 horas de preparação</Highlight> no espaço.
                    </li>
                    <li>
                        A operação segue o layout industrial que desenhamos para maximizar a saída dos fornos.
                    </li>
                </ol>
            </Message>

            <Message user={3}>
                Exatamente. Para entregarmos as pizzas quentes e no tempo certo, a disposição das estações é o coração da nossa logística:
            </Message>

            {/* Layout da Cozinha */}
            <div className="flex flex-col items-center justify-center bg-secundaria p-8 rounded-4xl my-6 border border-white/5">
                <h2 className="mb-4 font-bold text-xl text-white uppercase tracking-tighter">Workflow da Cozinha</h2>
                <div className="">
                    <Cozinha />
                </div>
                <p className="mt-4 text-xs text-gray-400 italic">
                    Legenda: Fluxo contínuo das massas até a expedição final.
                </p>
            </div>


            <Message user={4} isPublic>
                Carlos Carvalho, nossa logística está pronta para atender seus convidados com a máxima eficiência. 
                Considerando os insumos, a mão de obra especializada e a infraestrutura de fornos a lenha, o orçamento final para as 500 pizzas é de:
            </Message>

            <Message user={4} isPublic className="text-center py-4">
                <div className="bg-primary/10 p-6 rounded-2xl border-2 border-primary inline-block">
                    <span className="text-lg block text-gray-400 mb-1">Investimento Total do Evento</span>
										
										<div className="*:text-4xl font-black">
											
                    <Highlight>
                        {Precos.getf(valorFinalEvento)}
                    </Highlight>
										</div>
                </div>
            </Message>

            <Message user={5} isPublic>
                Excelente. O planejamento logístico justifica o investimento, principalmente pela complexidade de operar com fornos a lenha móveis. 
                <br /><br />
                <b>Proposta aceita!</b> Podemos assinar o contrato.
            </Message>

            <Message user={0}>
                Missão cumprida. É o poder da logística aplicada! 🍕🚀
            </Message>
        </div>
    );
}

export default Estrategia;
