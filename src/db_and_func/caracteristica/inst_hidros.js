export default (arg) => {

     switch(parseInt(arg)){
          case 1:
               return [
                    {
                         banco: 'SEDOP',
                         descricao: 'Ponto de agua (incl. tubos e conexoes)',
                         und: 'Pt',
                         valorUnit: '466.08',
                         calc: (params) => {
                              var quant = 0;
                              (params.nomesAmbientes).forEach( e => {
                                   switch (e) {
                                        case 'Banheiro':
                                        case 'Banheiro Social':
                                             quant += 2;
                                        break;
                                        case 'Cozinha':
                                             quant += 1;
                                        break;
                                        case 'Area de Serviço':
                                             quant += 2;
                                        break;

                                        default:
                                             quant += 0
                                   }
                              });
                              return parseFloat(quant)
                         }
                    },
                    {
                         banco: 'SEDOP',
                         descricao: 'Ponto de esgoto (incl. tubos, conexoes,cx. e ralos)',
                         und: 'Pt',
                         valorUnit: '388.36',
                         calc: (params) => {
                              var quant = 0;
                              (params.nomesAmbientes).forEach( e => {
                                   switch (e) {
                                        case 'Banheiro':
                                        case 'Banheiro Social':
                                             quant += 2;
                                        break;
                                        case 'Cozinha':
                                             quant += 1;
                                        break;
                                        case 'Area de Serviço':
                                             quant += 1;
                                        break;

                                        default:
                                             quant += 0
                                   }
                              });
                              return parseFloat(quant)
                         }
                    },
                    {
                         banco: 'SEDOP',
                         descricao: 'Bacia sifonada c/cx. descarga acoplada c/ assento',
                         und: 'UN',
                         valorUnit: '580.23',
                         calc: (params) => {
                              var quant = 0;
                              (params.nomesAmbientes).forEach( e => {
                                   switch (e) {
                                        case 'Banheiro':
                                        case 'Banheiro Social':
                                             quant += 1;
                                        break;

                                        default:
                                             quant += 0
                                   }
                              });
                              return parseFloat(quant)
                         }
                    },
                    {
                         banco: 'SEDOP',
                         descricao: 'Lavatorio de louça c/col.,torneira,sifao e valv.',
                         und: 'UN',
                         valorUnit: '629.65',
                         calc: (params) => {
                              var quant = 0;
                              (params.nomesAmbientes).forEach( e => {
                                   switch (e) {
                                        case 'Banheiro':
                                        case 'Banheiro Social':
                                             quant += 1;
                                        break;

                                        default:
                                             return 0
                                   }
                              });
                              return parseFloat(quant)
                         }
                    },
                    {
                         banco: 'SEDOP',
                         descricao: 'Chuveiro em PVC',
                         und: 'UN',
                         valorUnit: '32.44',
                         calc: (params) => {
                              var quant = 0;
                              (params.nomesAmbientes).forEach( e => {
                                   switch (e) {
                                        case 'Banheiro':
                                        case 'Banheiro Social':
                                             quant += 1;
                                        break;

                                        default:
                                             return 0
                                   }
                              });
                              return parseFloat(quant)
                         }
                    },
                    {
                         banco: 'SEDOP',
                         descricao: 'Porta papel higiênico - Polipropileno',
                         und: 'UN',
                         valorUnit: '74.38',
                         calc: (params) => {
                              var quant = 0;
                              (params.nomesAmbientes).forEach( e => {
                                   switch (e) {
                                        case 'Banheiro':
                                        case 'Banheiro Social':
                                             quant += 1;
                                        break;

                                        default:
                                             return 0
                                   }
                              });
                              return parseFloat(quant)
                         }
                    },
                    {
                         banco: 'SEDOP',
                         descricao: 'Porta toalha argola- cromado',
                         und: 'UN',
                         valorUnit: '75.69',
                         calc: (params) => {
                              var quant = 0;
                              (params.nomesAmbientes).forEach( e => {
                                   switch (e) {
                                        case 'Banheiro':
                                        case 'Banheiro Social':
                                             quant += 1;
                                        break;

                                        default:
                                             return 0
                                   }
                              });
                              return parseFloat(quant)
                         }
                    },
               ]
          break;

          default:
               return []
     }
}