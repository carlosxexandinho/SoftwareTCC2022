export default (arg) => {

     // dimensoes das esquadrias considerado
     var porta80 = (0.8 * 2.10);
     var porta60 = (0.6 * 2.10);
     var janela = (1.5 * 1.1);
     var balancin = (0.5 * 0.5);

     // composição para esquadrias
     switch(parseInt(arg)){
          case 1: 
               return [
                    {
                         banco: 'SEDOP',
                         descricao: 'Porta miolo madeira, acabamento em MDF c/ ferragens de abrir',
                         und: 'm²',
                         valorUnit: '337.59',
                         calc: (params) => {
                              var soma_porta = 0;

                              (params.nomesAmbientes).forEach( e => {
                                   switch(e){
                                        case 'Area de Serviço':
                                        case 'Area Livre':
                                        case 'Garagem Coberta':
                                        case 'Garagem Descoberta':
                                             soma_porta += 0;
                                        break;
                                        case 'Sala de Jantar':
                                             soma_porta += 0;
                                        break;
                                        case 'Banheiro':
                                        case 'Banheiro Social':
                                        case 'Depósito':
                                             soma_porta += porta60;
                                        break;
                                        case 'Hall':
                                             soma_porta += 0;
                                        break;

                                        default:
                                             soma_porta += porta80;
                                   }
                              });
                              return parseFloat(soma_porta)
                         }
                    },
                    {
                         banco: 'SEDOP',
                         descricao: 'Esquadria mad. venez. fixa c/ caix. simples e alizar',
                         und: 'm²',
                         valorUnit: '538.50',
                         calc: (params) => {
                              var soma_esquadria = 0;

                              (params.nomesAmbientes).forEach( e => {
                                   switch(e){
                                        case 'Dormitorio':
                                        case 'Suite':
                                        case 'Suite Master':
                                        case 'Cozinha':
                                        case 'Sala de Estar':
                                             soma_esquadria += janela;
                                        break;

                                        default:
                                             soma_esquadria += 0;
                                   }
                              });
                              return parseFloat(soma_esquadria)
                         }
                    },
               ]
          break;
          case 2: 
               return [
                    {
                         banco: 'SEDOP',
                         descricao: 'Porta miolo madeira, acabamento em MDF c/ ferragens de abrir',
                         und: 'm²',
                         valorUnit: '337.59',
                         calc: (params) => {
                              var soma_porta = 0;

                              (params.nomesAmbientes).forEach( e => {
                                   switch(e){
                                        case 'Area de Serviço':
                                        case 'Area Livre':
                                        case 'Garagem Coberta':
                                        case 'Garagem Descoberta':
                                             soma_porta += 0;
                                        break;
                                        case 'Sala de Jantar':
                                             soma_porta += 0;
                                        break;
                                        case 'Banheiro':
                                        case 'Banheiro Social':
                                        case 'Depósito':
                                             soma_porta += porta60;
                                        break;
                                        case 'Hall':
                                             soma_porta += 0;
                                        break;

                                        default:
                                             soma_porta += porta80;
                                   }
                              });
                              return parseFloat(soma_porta)
                         }
                    },
                    {
                         banco: 'SEDOP',
                         descricao: 'Esquadria de alumínio anodizado preto de correr c/ vidro e ferragens',
                         und: 'm²',
                         valorUnit: '882.48',
                         calc: (params) => {
                              var soma_esquadria = 0;

                              (params.nomesAmbientes).forEach( e => {
                                   switch(e){
                                        case 'Dormitorio':
                                        case 'Suite':
                                        case 'Suite Master':
                                        case 'Cozinha':
                                        case 'Sala de Estar':
                                             soma_esquadria += janela;
                                        break;

                                        default:
                                             return 0;
                                   }
                              });
                              return parseFloat(soma_esquadria)
                         }
                    },
                    {
                         banco: 'SEDOP',
                         descricao: 'Esquadria basculante em vidro temperado de 6mm',
                         und: 'm²',
                         valorUnit: '572.46',
                         calc: (params) => {
                              var soma_esquadria = 0;

                              (params.nomesAmbientes).forEach( e => {
                                   switch(e){
                                        case 'Banheiro':
                                        case 'Banheiro Social':
                                             soma_esquadria += balancin;
                                        break;

                                        default:
                                             return 0;
                                   }
                              });
                              return parseFloat(soma_esquadria)
                         }
                    },
                    {
                         banco: 'SEDOP',
                         descricao: 'Ferragens p/ balancim (c/ corrente)',
                         und: 'CJ',
                         valorUnit: '47.92',
                         calc: (params) => {
                              var soma_esquadria = 0;

                              (params.nomesAmbientes).forEach( e => {
                                   switch(e){
                                        case 'Banheiro':
                                        case 'Banheiro Social':
                                             soma_esquadria += 1;
                                        break;

                                        default:
                                             return 0;
                                   }
                              });
                              return parseFloat(soma_esquadria)
                         }
                    },
               ]
          break;

          default:
               return []
     }

}