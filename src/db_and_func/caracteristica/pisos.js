export default (pisos) => {

     switch(parseInt(pisos)){
          case 1: // composição para telha de fibrocimento
              //return 'arquitetonico selecionado';
               return [
                    {
                         banco: 'SEDOP',
                         descricao: 'Lajota ceramica - (Padrão Médio)',
                         und: 'm²',
                         valorUnit: '91.02',
                         calc: (params) => {
                              return parseFloat(params.areaProjetoTotal) 
                         }
                    }
               ]
          break;
          case 2: // composição para telha de fibrocimento
              //return 'arquitetonico selecionado';
               return [
                    {
                         banco: 'SEDOP',
                         descricao: 'Porcelanato (natural) - Padrão Alto',
                         und: 'm²',
                         valorUnit: '138.16',
                         calc: (params) => {
                              return parseFloat(params.areaProjetoTotal) 
                         }
                    }
               ]
          break;
          
          default:
               return []
     }

}