import { Check } from 'lucide-react';

const ComparisonCard = ({ title, features }) => (
  <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md mx-auto">
    <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">{title}</h2>
    <ul className="space-y-4">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <div className="flex-shrink-0">
            <Check className="h-6 w-6 text-green-500 mr-3 mt-1" />
          </div>
          <span className="text-lg text-gray-600">{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default function PlanejadosModulados() {
  const plannedFeatures = [
    "Medidas 100% personalizadas",
    "Mais caros",
    "Prazo de produção maior",
    "Aproveitamento total do ambiente",
    "Mais liberdade de design",
    "Ideal para quem quer exclusividade e encaixe perfeito",
  ];

  const modulatedFeatures = [
    "Medidas padronizadas",
    "Mais baratos",
    "Entrega mais rápida",
    "Menor aproveitamento de espaço",
    "Algumas opções de personalização (largura, puxadores, cores)",
    "Ideal para quem quer economia e agilidade",
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
            <h1 className="text-2xl md:text-3xl font-extrabold text-zinc-900 mb-4">
                Planejados x Modulados: Qual a melhor opção para você?
            </h1>
            <p className="max-w-3xl mx-auto text-zinc-600 leading-relaxed">
                Na hora de mobiliar um ambiente, é comum surgir a dúvida: planejados ou modulados? Cada solução tem suas vantagens, e a escolha ideal depende do seu espaço, orçamento e necessidades.
            </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl m-auto">
          <ComparisonCard title="Planejados" features={plannedFeatures} />
          <ComparisonCard title="Modulados" features={modulatedFeatures} />
        </div>
        <div className="mt-12 text-center">
            <p className="max-w-2xl mx-auto text-md text-zinc-600">
                Na Akai Móveis você encontra as duas opções, com atendimento especializado para ajudar a escolher o que realmente faz sentido para você.
            </p>
        </div>
      </div>
    </div>
  );
}
