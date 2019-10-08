if (b["ut.event"] !== "link") {
  if (TMSHelper.getParameterByName('gclid') !== '') { // if AdWords landing page
      // Setting up the variable for all AdWords Value Track Parameters
      // b["toolAdW_vt_string"] = TMSHelper.extractMultPar(["campaignid","adgroup_id","ad_position","ad_type","feeditemid","targetid", 
      // "origin", "keyword_id", "matchtype","pla_target_id","creative_id","keyword","prod_id","productid"]);
      // b['toolAdw_vt_string'] = TMSHelper.getParameterByName('gclid')
      b['toolAdw_vt_string'] = TMSHelper.getParameterByName('gclid')
  }
}