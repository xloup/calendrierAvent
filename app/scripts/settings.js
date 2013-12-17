/**
 * Created by leloup on 11/14/13.
 */
define ( [],

function () {

 var data = {


     "googleKey": "0AorhuYQXsFYtdFY0N3lkY3ZkYXhIR0RCT3dOdThQcWc",
     "pathGlobal":"http://www.leloupmechant.com/dev/arte/calAvent/app/",
     //"pathGlobal":"sites/default/files/calAvent/app/",
     "path2":"path2String",

     "rectTemplate":'<div class="rectangle">'


      +'  <div class="imgContainer clearfix">'
         +'     <div class="clickZone"></div>'
      +'      <div class="imagesBGR">'
      +   '      <div class="daimg"> <img src="<%=imgPath%>bts/INACTIF/<%=Day%>.png"  />  </div>'
      +'        <div class="daimg"> <img src="<%=imgPath%>bts/ACTIF/<%=Day%>.png"  />  </div>'
       +'        <div class="daimg"> <img src="<%=imgPath%>bts/OVER/<%=Day%>.png"  />  </div>'
        +'    </div>'
      +'  </div>'
  +'  </div>',

     "rectsTemplate":' <div class="pane-content ">'
    +' <div class="panel-pane pane-views-panes pane-magazine-magazine-promo promo adaptForCalAvent" >'

       +'  <div class="calAventVideoHolder">'
          +'   <div id="transparentBgr"></div>'
            +' <div id="embeddedVineVid"><div id="btXVideo"> <div class="btnClosePane closeVideoCalBt"></div></div> </div>'
            +' <div id="embeddedVineVidAuthor"></div>'
         +'</div>'

         +'<div id="handCursorHolder"> <div id="handCursor"></div> </div>'

         +'<div class="btnClosePane calX"></div>'
       +'  <div class="calTitre"> CALENDRIER DE L\'AVENT / ADVENTSKALENDER  <hr class="hrRule"> <span class="calAuthors"> de / von <a href="http://studiocaptureparis.blogspot.fr/" target="_blank">CAPTURE </a>  & Friends</span>  </div>'

        +' <div class="calAventContainer">'
               +'  <div id="calBoxesHolder" class="container"></div>'
                +' <div class="clearfix footerBox"></div>'
             +'</div>'


         +'</div>'
     +'</div>'

 };
 return {"data":data};


});