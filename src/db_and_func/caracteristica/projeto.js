export default (projeto) => {

     switch(parseInt(projeto)){
          case 1:
              //return 'arquitetonico selecionado';
               return [
                    {
                         banco: 'LOCAL',
                         descricao: 'Projeto Arquitetonico',
                         und: 'm²',
                         valorUnit: '7',
                         calc: (params) => {
                              return parseFloat(params.areaProjetoTotal)
                         }
                    }
               ]
          break;
          case 7:
              //return 'arquitetonico selecionado';
               return [
                    {
                         banco: 'LOCAL',
                         descricao: 'Projeto Arquitetonico',
                         und: 'm²',
                         valorUnit: '9',
                         calc: (params) => {
                              return parseFloat(params.areaProjetoTotal)
                         }
                    },
                    {
                         banco: 'LOCAL',
                         descricao: 'Projeto Elétrico',
                         und: 'm²',
                         valorUnit: '5',
                         calc: (params) => {
                              return parseFloat(params.areaProjetoTotal)
                         }
                    },
                    {
                         banco: 'LOCAL',
                         descricao: 'Projeto Hidrossanitário',
                         und: 'm²',
                         valorUnit: '5',
                         calc: (params) => {
                              return parseFloat(params.areaProjetoTotal)
                         }
                    },
               ]
          break;
          default:
               return []
     }

}