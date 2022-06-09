export default (args) => {

     // composição de insumos para forro

     switch(parseInt(args)){
          case 1:
               return [
                    {
                         banco: 'SEDOP',
                         descricao: 'Barroteamento em madeira de lei p/ forro PVC',
                         und: 'm²',
                         valorUnit: '52.08',
                         calc: (params) => {
                              var areaprojeto = params.areaProjetoTotal;
                              return parseFloat((areaprojeto) * (1 - 0.1)) // retira-se da area total 10% equivalente a area de parede, ao retirar resta as areas internas
                         }
                    },
                    {
                         banco: 'SEDOP',
                         descricao: 'Forro em lambri de PVC',
                         und: 'm²',
                         valorUnit: '42.39',
                         calc: (params) => {
                              var areaprojeto = params.areaProjetoTotal;
                              return parseFloat((areaprojeto) * (1 - 0.1)) // retira-se da area total 10% equivalente a area de parede, ao retirar resta as areas internas
                         }
                    },
               ]
          break;
          case 2:
               return [
                    {
                         banco: 'SEDOP',
                         descricao: 'Forro em gesso acartonado aramado',
                         und: 'm²',
                         valorUnit: '71.93',
                         calc: (params) => {
                              var areaprojeto = params.areaProjetoTotal;
                              return parseFloat((areaprojeto) * (1 - 0.1)) // retira-se da area total 10% equivalente a area de parede, ao retirar resta as areas internas
                         }
                    },
                    {
                         banco: 'SEDOP',
                         descricao: 'Acrílica semi-brilho c/ massa e selador - interna e externa',
                         und: 'm²',
                         valorUnit: '44.33',
                         calc: (params) => {
                              var areaprojeto = params.areaProjetoTotal;
                              return parseFloat((areaprojeto) * (1 - 0.1)) // retira-se da area total 10% equivalente a area de parede, ao retirar resta as areas internas
                         }
                    },
               ]
          break;
          
          default:
               return []
     }

}