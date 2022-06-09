export default (cobertura) => {

     switch(parseInt(cobertura)){
          case 2: // composição para telha de fibrocimento
              //return 'arquitetonico selecionado';
               return [
                    {
                         banco: 'SEDOP',
                         descricao: 'Estrutura em mad.p/ chapa fibrocimento - pc. serrada',
                         und: 'm²',
                         valorUnit: '58.54',
                         calc: (params) => {
                              return parseFloat(params.areaProjetoTotal) 
                         }
                    },
                    {
                         banco: 'SEDOP',
                         descricao: 'Cobertura - Telha de fibrocimento e=6mm',
                         und: 'm²',
                         valorUnit: '77.71',
                         calc: (params) => {
                              return parseFloat(params.areaProjetoTotal) // viga de fundação considerada 20x30cm
                         }
                    },
                    {
                         banco: 'SEDOP',
                         descricao: 'Ripamento para sub cobertura (manta)',
                         und: 'm²',
                         valorUnit: '33.41',
                         calc: (params) => {
                              return parseFloat(params.areaProjetoTotal) // viga de fundação considerada 20x30cm
                         }
                    },
                    {
                         banco: 'SEDOP',
                         descricao: 'Manta para sub cobertura e= 1.1mm',
                         und: 'm²',
                         valorUnit: '24.46', 
                         calc: (params) => {
                              return parseFloat(params.areaProjetoTotal) // viga de fundação considerada 20x30cm
                         }
                    },
               ]
          break;
          
          default:
               return []
     }

}