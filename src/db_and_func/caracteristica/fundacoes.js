export default (fundacoes) => {
     const viga = (0.2 * 0.3); // viga de fundação considerada 20x30cm

     switch(parseInt(fundacoes)){
          case 1:
              //return 'arquitetonico selecionado';
               return [
                    {
                         banco: 'SEDOP',
                         descricao: 'Escavação manual ate 1.50m de profundidade',
                         und: 'm³',
                         valorUnit: '51.21',
                         calc: (params) => {
                              return parseFloat(params.perimetroVirtual * viga) 
                         }
                    },
                    {
                         banco: 'SEDOP',
                         descricao: 'Baldrame em conc.simples c/seixo incl.forma mad.br.',
                         und: 'm³',
                         valorUnit: '1385.06',
                         calc: (params) => {
                              return parseFloat(params.perimetroVirtual * viga) // viga de fundação considerada 20x30cm
                         }
                    }
               ]
          break;
          case 2:
              //return 'arquitetonico selecionado';
               return [
                    {
                         banco: 'SEDOP',
                         descricao: 'Escavação manual ate 1.50m de profundidade',
                         und: 'm³',
                         valorUnit: '51.21',
                         calc: (params) => {
                              return parseFloat(params.perimetroVirtual * viga) 
                         }
                    },
                    {
                         banco: 'SEDOP',
                         descricao: 'Baldrame em concreto armado c/ cinta de amarração',
                         und: 'm³',
                         valorUnit: '2682.44',
                         calc: (params) => {
                              return parseFloat(params.perimetroVirtual * viga) // viga de fundação considerada 20x30cm
                         }
                    }
               ]
          break;
          case 3:
              //return 'arquitetonico selecionado';
               return [
                    {
                         banco: 'SEDOP',
                         descricao: 'Escavação manual ate 1.50m de profundidade',
                         und: 'm³',
                         valorUnit: '51.21',
                         calc: (params) => {
                              return parseFloat(params.perimetroVirtual * viga) 
                         }
                    },
                    {
                         banco: 'SEDOP',
                         descricao: 'Fundação corrida com seixo',
                         und: 'm³',
                         valorUnit: '613.73',
                         calc: (params) => {
                              return parseFloat(params.perimetroVirtual * viga) // viga de fundação considerada 20x30cm
                         }
                    }
               ]
          break;
          
          default:
               return []
     }

}