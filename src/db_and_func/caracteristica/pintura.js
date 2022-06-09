export default (arg) => {
     
     const pe_direito = 3;

     // composição para pintura
     switch(parseInt(arg)){
          case 1: 
               return [
                    {
                         banco: 'SEDOP',
                         descricao: 'PVA interna sem massa c/ selador',
                         und: 'm²',
                         valorUnit: '21.39',
                         calc: (params) => {
                              return parseFloat(params.perimetroVirtual * pe_direito * 1.8)
                         }
                    }
               ]
          break;
          case 2: 
               return [
                    {
                         banco: 'SEDOP',
                         descricao: 'PVA interna c/ massa e selador',
                         und: 'm²',
                         valorUnit: '32.88',
                         calc: (params) => {
                              return parseFloat(params.perimetroVirtual * pe_direito * 2)
                         }
                    }
               ]
          break;
          case 3: 
               return [
                    {
                         banco: 'SEDOP',
                         descricao: 'Acrilica fosca int./ext. c/massa e selador - 3 demaos',
                         und: 'm²',
                         valorUnit: '40.83',
                         calc: (params) => {
                              return parseFloat(params.perimetroVirtual * pe_direito * 2)
                         }
                    }
               ]
          break;

          default:
               return []
     }

}