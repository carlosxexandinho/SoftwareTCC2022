export default () => {

     return [
          // insumos basicos
          {
               banco: 'SEDOP',
               descricao: 'Limpeza do terreno',
               und: 'm²',
               valorUnit: '2.05',
               calc: (params) => {
                    return parseFloat(params.areaTerreno)
               }
          },
          {
               banco: 'SEDOP',
               descricao: 'Locação da obra a trena',
               und: 'm²',
               valorUnit: '4.87',
               calc: (params) => {
                    return parseFloat(params.areaProjetoTotal)
               }
          },
          {
               banco: 'SEDOP',
               descricao: 'Reaterro compactado',
               und: 'm³',
               valorUnit: '54.53',
               calc: (params) => {
                    /*  Para o reaterro compactado será utilizada a área total de projeto (AT) multiplicado por 0,2 metros, para se obter o volume de aterro que servirá de base para o piso. */
                    return parseFloat(params.areaProjetoTotal * 0.2)
               }
          },
          {
               banco: 'SEDOP',
               descricao: 'Concreto armado FCK=25MPA com forma aparente - 1 reaproveitamento (incl. lançamento e aden',
               und: 'm³',
               valorUnit: '3253.64',
               calc: (params) => {
                    const Av = 0.0600; //area de viga considerado
                    const Ap = 0.0400; //area de pilar considerado
                    const L = 3; // altura pilar considerado
                    const Pq = 2 // coeficiente de quantidade de pilar

                    var Vviga = params.perimetroVirtual * Av; //  volume de viga
                    var Vpilar = L * Ap * (params.quantAmbientes * Pq); // volume de pilar
                    var Vtotal = Vviga + Vpilar;

                    return parseFloat(Vtotal);
               }
          },
          {
               banco: 'SEDOP',
               descricao: 'Alvenaria tijolo de barro a cutelo',
               und: 'm²',
               valorUnit: '67.85',
               calc: (params) => {
                    var pe_direito = 3; // pé direito considerado no orçamento
                    return parseFloat(params.perimetroVirtual * pe_direito)
               }
          },
          {
               banco: 'SEDOP',
               descricao: 'Alvenaria tijolo de barro a singelo',
               und: 'm²',
               valorUnit: '91.96',
               calc: (params) => {
                    return parseFloat(params.perimetroVirtual * 0.2) //vinte centímetros considerado são referentes a elevação da construção em relação ao solo.
               }
          },
          {
               banco: 'SEDOP',
               descricao: 'Chapisco de cimento e areia no traço 1:3',
               und: 'm²',
               valorUnit: '10.83',
               calc: (params) => {
                    var pe_direito = 3; // pé direito considerado no orçamento
                    return parseFloat(params.perimetroVirtual * pe_direito * 2)
               }
          },
          {
               banco: 'SEDOP',
               descricao: 'Reboco com argamassa 1:6:Adit. Plast.',
               und: 'm²',
               valorUnit: '43.99',
               calc: (params) => {
                    var pe_direito = 3; // pé direito considerado no orçamento
                    return parseFloat(params.perimetroVirtual * pe_direito * 2)
               }
          },
          {
               banco: 'SEDOP',
               descricao: 'Camada impermeabilizadora e=10cm c/ seixo',
               und: 'm²',
               valorUnit: '60.68',
               calc: (params) => {
                    return parseFloat(params.areaProjetoTotal)
               }
          },
          {
               banco: 'SEDOP',
               descricao: 'Camada regularizadora no traço 1:4',
               und: 'm²',
               valorUnit: '35.53',
               calc: (params) => {
                    return parseFloat(params.areaProjetoTotal)
               }
          },
          {
               banco: 'SEDOP',
               descricao: 'Impermeabilização para baldrame',
               und: 'm²',
               valorUnit: '35.53',
               calc: (params) => {
                    return parseFloat(params.perimetroVirtual * 0.2)
               }
          },
          {
               banco: 'SEDOP',
               descricao: 'Limpeza geral e entrega da obra',
               und: 'm²',
               valorUnit: '6.83',
               calc: (params) => {
                    return parseFloat(params.areaProjetoTotal)
               }
          }
     ]
}