export default (muro) => {

     switch(parseInt(muro)){
          case 1: // composição muro de alvenaria
              //return 'arquitetonico selecionado';
               return [
                    {
                         banco: 'SEDOP',
                         descricao: 'Muro em alvenaria,rebocado e pintado 2 faces(h=2.50m)',
                         und: 'm',
                         valorUnit: '697.69',
                         calc: (params) => {
                              return parseFloat(params.perimetro) 
                         }
                    }
               ]
          break;
          case 2: // composição muro de alvenaria
              //return 'arquitetonico selecionado';
               return [
                    {
                         banco: 'SEDOP',
                         descricao: 'Muro em alvenaria,rebocado e pintado 2 faces(h=2.0m)',
                         und: 'm',
                         valorUnit: '581.19',
                         calc: (params) => {
                              return parseFloat(params.perimetro) 
                         }
                    }
               ]
          break;
          
          default:
               return []
     }

}