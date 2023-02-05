var buildClickThroughUrl = function(target) {
    var clickMacro = '%%CLICK_URL_UNESC%%';
    return (clickMacro + encodeURIComponent(target));
  };
  var init = function() {
    var builder = new xfp.creative.GraphicalInterstitial.ParameterBuilder();
    builder
        .addImage('[]')
        .addImage('[%Image2%]')
        .addImage('[%Image3%]')
        .addImage('[%Image4%]')
        .addImage('[%Image5%]')
        .addImage('[%Image6%]')
        .addImage('[%Image7%]')
        .addImage('[%Image8%]')
        .addImage('[%Image9%]')
        .addImage('[%Image10%]');
    builder
        .addTransition('[%TransitionName1%]', '[%TransitionDuration1%]', '[%TransitionDelay1%]', '[%TransitionEasing1%]', '[%TransitionAnchor1%]', '[%TransitionDirection1%]')
        .addTransition('[%TransitionName2%]', '[%TransitionDuration2%]', '[%TransitionDelay2%]', '[%TransitionEasing2%]', '[%TransitionAnchor2%]', '[%TransitionDirection2%]')
        .addTransition('[%TransitionName3%]', '[%TransitionDuration3%]', '[%TransitionDelay3%]', '[%TransitionEasing3%]', '[%TransitionAnchor3%]', '[%TransitionDirection3%]')
        .addTransition('[%TransitionName4%]', '[%TransitionDuration4%]', '[%TransitionDelay4%]', '[%TransitionEasing4%]', '[%TransitionAnchor4%]', '[%TransitionDirection4%]')
        .addTransition('[%TransitionName5%]', '[%TransitionDuration5%]', '[%TransitionDelay5%]', '[%TransitionEasing5%]', '[%TransitionAnchor5%]', '[%TransitionDirection5%]')
        .addTransition('[%TransitionName6%]', '[%TransitionDuration6%]', 
'[%TransitionDelay6%]','[%TransitionEasing6%]','[%TransitionAnchor6%]', '[%TransitionDirection6%]')
        .addTransition('[%TransitionName7%]', '[%TransitionDuration7%]', '[%TransitionDelay7%]', '[%TransitionEasing7%]', '[%TransitionAnchor7%]', '[%TransitionDirection7%]')
        .addTransition('[%TransitionName8%]', '[%TransitionDuration8%]', '[%TransitionDelay8%]', '[%TransitionEasing8%]', '[%TransitionAnchor8%]', '[%TransitionDirection8%]')
        .addTransition('[%TransitionName9%]', '[%TransitionDuration9%]', '[%TransitionDelay9%]', '[%TransitionEasing9%]', '[%TransitionAnchor9%]', '[%TransitionDirection9%]');
    builder
        .addLinkTarget('[%LinkMapCoordinates1%]', buildClickThroughUrl('[%Url1%]'), '', '[%UrlTarget1%]')
        .addLinkTarget('[%LinkMapCoordinates2%]', buildClickThroughUrl('[%Url2%]'), '', '[%UrlTarget2%]')
        .addLinkTarget('[%LinkMapCoordinates3%]', buildClickThroughUrl('[%Url3%]'), '', '[%UrlTarget3%]')
        .addLinkTarget('[%LinkMapCoordinates4%]', buildClickThroughUrl('[%Url4%]'), '', '[%UrlTarget4%]')
        .addLinkTarget('[%LinkMapCoordinates5%]', buildClickThroughUrl('[%Url5%]'), '', '[%UrlTarget5%]');
    builder
        .addSize('[300]', '[200]');
    builder
        .addImpressionUrl('%%VIEW_URL_UNESC%%');
    builder
        .addBackColor('[Black]');
    var params = builder.build();
    var gi = new xfp.creative.GraphicalInterstitial();
    gi.init('gads', params);
    if (gi.isSdk()) {
      document.addEventListener('touchmove', function(e) {
        e.preventDefault();
      }, true);
    }
  };
  window.addEventListener('load', function() {
    window.setTimeout(function() {
      init();
    }, 100);
  }, false);