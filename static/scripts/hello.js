var CablesDePruebaCount = 0;
      var CaimanesCount = 0;
      var CautinCount = 0;
      var FuenteCount = 0;
      var MultimetroCount = 0;
      var OsciloscopioCount = 0;
      var ProtoboardCount = 0;
      var TransformadorCount = 0;
      var VelizCount = 0;

      CablesDePrueba = document.getElementById("CablesDePrueba");
      CablesDePrueba.value = CablesDePruebaCount;
      Caimanes = document.getElementById("Caimanes");
      Caimanes.value = CaimanesCount;

    


      function CablesDePruebaAdd(){
          CablesDePruebaCount =CablesDePruebaCount+1;
          CablesDePrueba.value = CablesDePruebaCount;
      }
      function CablesDePruebaRemove(){
          if(CablesDePruebaCount > 0){
            CablesDePruebaCount =CablesDePruebaCount-1;
            CablesDePrueba.value = CablesDePruebaCount;
          }
      }

      function CaimanesCountAdd(){
          CaimanesCount =CaimanesCount+1;
          Caimanes.value = CaimanesCount;
      }
      function CaimanesCountRemove(){
        if(CaimanesCount > 0){
          CaimanesCount =CaimanesCount-1;
          Caimanes.value = CaimanesCount;
        }
      }