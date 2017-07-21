import {PlanDB,AttractionDB,RestaurantDB,SouvenirDB,TrafficDB} from "./DBModel"
import {Plan , TravelRecord,PlanReportSetting} from "../Model/Plan"
import {TimeCheck} from '../Model/Common'
import Resource from "../Resource"
import * as XLSX from "xlsx"


export function WorkBook()
{
    let k=XLSX.utils.book_new();
    k.Props={};
    k.Props.Author="kin lei";
    k.Props.Title="travel report";
    return k;
}




export function attractionSheet(list:Array<AttractionDB>)
{
    let sheet:any={};
    let c=0;
    let r=0;
    let ratio=5;
    let lastCountry="";
    let lastCity="";
    let lastArea="";
    sheet['!cols']=[];
    //-------------------------------------------------------------------------------sheet header
    sheet[XLSX.utils.encode_cell({c:c++,r:r})]={v:Resource.country,t:'s'};
    sheet[XLSX.utils.encode_cell({c:c++,r:r})]={v:Resource.city,t:'s'};
    sheet[XLSX.utils.encode_cell({c:c++,r:r})]={v:Resource.area,t:'s'};
    sheet[XLSX.utils.encode_cell({c:c++,r:r})]={v:Resource.name,t:'s'};
    sheet[XLSX.utils.encode_cell({c:c++,r:r})]={v:Resource.attraction+Resource.detail,t:'s'};
    sheet[XLSX.utils.encode_cell({c:c++,r:r})]={v:Resource.openTime,t:'s'};
    sheet[XLSX.utils.encode_cell({c:c++,r:r})]={v:Resource.bestTime,t:'s'};
    sheet[XLSX.utils.encode_cell({c:c++,r:r})]={v:Resource.avoidTime,t:'s'};
    sheet[XLSX.utils.encode_cell({c:c++,r:r++})]={v:Resource.remark,t:'s'};
    sheet['!cols'].push({width:Resource.country.length+ratio});
    sheet['!cols'].push({width:Resource.city.length+ratio});
    sheet['!cols'].push({width:Resource.area.length+ratio});
    sheet['!cols'].push({width:Resource.name.length+ratio});
    sheet['!cols'].push({width:Resource.attraction.length+ratio});
    sheet['!cols'].push({width:Resource.openTime.length+ratio});
    sheet['!cols'].push({width:Resource.bestTime.length+ratio});
    sheet['!cols'].push({width:Resource.avoidTime.length+ratio});
    sheet['!cols'].push({width:Resource.remark.length+ratio});
    //------------------------------------------------------------------------------ sheet body
    for(var i of list)
    {
        c=0;
        let area=i.area.join(" ");
        let ot=i.openTime.map(r=>r[0]+"-"+r[1]).join("\n");
        let bt=i.bestTime.map(r=>r[0]+"-"+r[1]).join("\n");
        let at=i.avoidTime.map(r=>r[0]+"-"+r[1]).join("\n");
        i.country==lastCountry  ?c++  :sheet[XLSX.utils.encode_cell({c:c++,r:r})]={t:'s',v:i.country};
        i.city==lastCity        ?c++  :sheet[XLSX.utils.encode_cell({c:c++,r:r})]={t:'s',v:i.city};
        area==lastArea          ?c++  :sheet[XLSX.utils.encode_cell({c:c++,r:r})]={t:'s',v:area};
        sheet[XLSX.utils.encode_cell({c:c++,r:r})]={t:'s',v:i.name};
        sheet[XLSX.utils.encode_cell({c:c++,r:r})]={t:'s',v:i.attractionDetail};
        sheet[XLSX.utils.encode_cell({c:c++,r:r})]={t:'s',v:ot};
        sheet[XLSX.utils.encode_cell({c:c++,r:r})]={t:'s',v:bt};
        sheet[XLSX.utils.encode_cell({c:c++,r:r})]={t:'s',v:at};
        sheet[XLSX.utils.encode_cell({c:c++,r:r++})]={t:'s',v:i.remark};
        lastCity=i.city;
        lastArea=area;
        lastCountry=i.country;
        //--------------------------- update col width
        sheet['!cols'][0].width = sheet['!cols'][0].width < i.country.length+ratio ? i.country.length+ratio :sheet['!cols'][0].width;
        sheet['!cols'][1].width = sheet['!cols'][1].width < i.city.length+ratio ? i.city.length+ratio :sheet['!cols'][1].width;
        sheet['!cols'][2].width = sheet['!cols'][2].width < area.length+ratio ? area.length+ratio :sheet['!cols'][2].width;
        sheet['!cols'][3].width = sheet['!cols'][3].width < i.name.length+ratio ? i.name.length+ratio :sheet['!cols'][3].width;
        sheet['!cols'][4].width = sheet['!cols'][4].width < i.attractionDetail.length+ratio ? i.attractionDetail.length+ratio :sheet['!cols'][4].width;
        sheet['!cols'][5].width = sheet['!cols'][5].width < ot.length+ratio ? ot.length+ratio :sheet['!cols'][5].width;
        sheet['!cols'][6].width = sheet['!cols'][6].width < bt.length+ratio ? bt.length+ratio :sheet['!cols'][6].width;
        sheet['!cols'][7].width = sheet['!cols'][7].width < at.length+ratio ? at.length+ratio :sheet['!cols'][7].width;
        sheet['!cols'][8].width = sheet['!cols'][8].width < i.remark.length+ratio ? i.remark.length+ratio :sheet['!cols'][8].width;
    }
    //------------------------------------------------------------------------------------
    sheet['!ref']="A1:"+XLSX.utils.encode_cell({c:c,r:r});
    return sheet;
}


export function restaurantSheet(list:Array<RestaurantDB>)
{    
    let sheet:any={};
    let c=0;
    let r=0;
    let lastCountry="";
    let lastCity="";
    let lastArea="";
    let lastBrand="";
    let ratio=5;
    sheet['!cols']=[];
    //-------------------------------------------------------------------------------sheet header
    sheet[XLSX.utils.encode_cell({c:c++,r:r})]={v:Resource.country,t:'s'};
    sheet[XLSX.utils.encode_cell({c:c++,r:r})]={v:Resource.city,t:'s'};
    sheet[XLSX.utils.encode_cell({c:c++,r:r})]={v:Resource.area,t:'s'};
    sheet[XLSX.utils.encode_cell({c:c++,r:r})]={v:Resource.brand,t:'s'};
    sheet[XLSX.utils.encode_cell({c:c++,r:r})]={v:Resource.name,t:'s'};
    sheet[XLSX.utils.encode_cell({c:c++,r:r})]={v:Resource.priceRange,t:'s'};
    sheet[XLSX.utils.encode_cell({c:c++,r:r})]={v:Resource.restaurant+Resource.detail,t:'s'};
    sheet[XLSX.utils.encode_cell({c:c++,r:r})]={v:Resource.openTime,t:'s'};
    sheet[XLSX.utils.encode_cell({c:c++,r:r})]={v:Resource.bestTime,t:'s'};
    sheet[XLSX.utils.encode_cell({c:c++,r:r})]={v:Resource.avoidTime,t:'s'};
    sheet[XLSX.utils.encode_cell({c:c++,r:r++})]={v:Resource.remark,t:'s'};
    sheet['!cols'].push({width:Resource.country.length+ratio});
    sheet['!cols'].push({width:Resource.city.length+ratio});
    sheet['!cols'].push({width:Resource.area.length+ratio});
    sheet['!cols'].push({width:Resource.brand.length+ratio});
    sheet['!cols'].push({width:Resource.name.length+ratio});
    sheet['!cols'].push({width:Resource.priceRange.length+ratio});
    sheet['!cols'].push({width:Resource.restaurant.length+ratio});
    sheet['!cols'].push({width:Resource.openTime.length+ratio});
    sheet['!cols'].push({width:Resource.bestTime.length+ratio});
    sheet['!cols'].push({width:Resource.avoidTime.length+ratio});
    sheet['!cols'].push({width:Resource.remark.length+ratio});
    //------------------------------------------------------------------------------ sheet body
    for(var i of list)
    {
        c=0;
        let area=i.area.join(" ");
        let ot=i.openTime.map(r=>r[0]+"-"+r[1]).join("\n");
        let bt=i.bestTime.map(r=>r[0]+"-"+r[1]).join("\n");
        let at=i.avoidTime.map(r=>r[0]+"-"+r[1]).join("\n");
        i.country==lastCountry  ?c++  :sheet[XLSX.utils.encode_cell({c:c++,r:r})]={t:'s',v:i.country};
        i.city==lastCity        ?c++  :sheet[XLSX.utils.encode_cell({c:c++,r:r})]={t:'s',v:i.city};
        area==lastArea          ?c++  :sheet[XLSX.utils.encode_cell({c:c++,r:r})]={t:'s',v:area};
        i.brand==lastBrand      ?c++  :sheet[XLSX.utils.encode_cell({c:c++,r:r})]={t:'s',v:i.brand};
        sheet[XLSX.utils.encode_cell({c:c++,r:r})]={t:'s',v:i.name};
        sheet[XLSX.utils.encode_cell({c:c++,r:r})]={t:'s',v:i.priceRange.join("~")};
        sheet[XLSX.utils.encode_cell({c:c++,r:r})]={t:'s',v:i.restaurantDetail};
        sheet[XLSX.utils.encode_cell({c:c++,r:r})]={t:'s',v:ot};
        sheet[XLSX.utils.encode_cell({c:c++,r:r})]={t:'s',v:bt};
        sheet[XLSX.utils.encode_cell({c:c++,r:r})]={t:'s',v:at};
        sheet[XLSX.utils.encode_cell({c:c++,r:r++})]={t:'s',v:i.remark};
        lastCity=i.city;
        lastArea=area;
        lastCountry=i.country;
        lastBrand=i.brand;
        //--------------------------- update col width
        sheet['!cols'][0].width = sheet['!cols'][0].width < i.country.length+ratio ? i.country.length+ratio :sheet['!cols'][0].width;
        sheet['!cols'][1].width = sheet['!cols'][1].width < i.city.length+ratio ? i.city.length+ratio :sheet['!cols'][1].width;
        sheet['!cols'][2].width = sheet['!cols'][2].width < area.length+ratio ? area.length+ratio :sheet['!cols'][2].width;
        sheet['!cols'][3].width = sheet['!cols'][3].width < i.brand.length+ratio ? i.brand.length+ratio :sheet['!cols'][3].width;
        sheet['!cols'][4].width = sheet['!cols'][4].width < i.name.length+ratio ? i.name.length+ratio :sheet['!cols'][4].width;
        sheet['!cols'][5].width = sheet['!cols'][5].width < i.priceRange.join("~").length+ratio ? i.priceRange.join("~").length+ratio :sheet['!cols'][5].width;
        sheet['!cols'][6].width = sheet['!cols'][6].width < i.restaurantDetail.length+ratio ? i.restaurantDetail.length+ratio :sheet['!cols'][6].width;
        sheet['!cols'][7].width = sheet['!cols'][7].width < ot.length+ratio ? ot.length+ratio :sheet['!cols'][7].width;
        sheet['!cols'][8].width = sheet['!cols'][8].width < bt.length+ratio ? bt.length+ratio :sheet['!cols'][8].width;
        sheet['!cols'][9].width = sheet['!cols'][9].width < at.length+ratio ? at.length+ratio :sheet['!cols'][9].width;
        sheet['!cols'][10].width = sheet['!cols'][10].width < i.remark.length+ratio ? i.remark.length+ratio :sheet['!cols'][10].width;
    }
    sheet['!ref']="A1:"+XLSX.utils.encode_cell({c:c,r:r});
    return sheet;
}



export function souvenirSheet(list:Array<SouvenirDB>)
{
    let sheet:any={};
    let c=0;
    let r=0;
    let lastCountry="";
    let lastCity="";
    let lastArea="";
    let lastBrand="";
    let ratio=5;
    sheet['!cols']=[];
    //-------------------------------------------------------------------------------sheet header
    sheet[XLSX.utils.encode_cell({c:c++,r:r})]={v:Resource.country,t:'s'};
    sheet[XLSX.utils.encode_cell({c:c++,r:r})]={v:Resource.city,t:'s'};
    sheet[XLSX.utils.encode_cell({c:c++,r:r})]={v:Resource.area,t:'s'};
    sheet[XLSX.utils.encode_cell({c:c++,r:r})]={v:Resource.brand,t:'s'};
    sheet[XLSX.utils.encode_cell({c:c++,r:r})]={v:Resource.name,t:'s'};
    sheet[XLSX.utils.encode_cell({c:c++,r:r})]={v:Resource.recommendFood,t:'s'};
    sheet[XLSX.utils.encode_cell({c:c++,r:r})]={v:Resource.price,t:'s'};
    sheet[XLSX.utils.encode_cell({c:c++,r:r})]={v:Resource.dateCanBeStored,t:'s'};
    sheet[XLSX.utils.encode_cell({c:c++,r:r})]={v:Resource.souvenir+Resource.detail,t:'s'};
    sheet[XLSX.utils.encode_cell({c:c++,r:r})]={v:Resource.openTime,t:'s'};
    sheet[XLSX.utils.encode_cell({c:c++,r:r++})]={v:Resource.remark,t:'s'};
    sheet['!cols'].push({width:Resource.country.length+ratio});
    sheet['!cols'].push({width:Resource.city.length+ratio});
    sheet['!cols'].push({width:Resource.area.length+ratio});
    sheet['!cols'].push({width:Resource.brand.length+ratio});
    sheet['!cols'].push({width:Resource.name.length+ratio});
    sheet['!cols'].push({width:Resource.recommendFood.length+ratio});
    sheet['!cols'].push({width:Resource.price.length+ratio});
    sheet['!cols'].push({width:Resource.dateCanBeStored.length+ratio});
    sheet['!cols'].push({width:Resource.souvenir.length+ratio});
    sheet['!cols'].push({width:Resource.openTime.length+ratio});
    sheet['!cols'].push({width:Resource.remark.length+ratio});
    //------------------------------------------------------------------------------ sheet body
    for(var i of list)
    {
        c=0;
        let area=i.area.join(" ");
        let ot=i.openTime.map(r=>r[0]+"-"+r[1]).join("\n");
        i.country==lastCountry  ?c++  :sheet[XLSX.utils.encode_cell({c:c++,r:r})]={t:'s',v:i.country};
        i.city==lastCity        ?c++  :sheet[XLSX.utils.encode_cell({c:c++,r:r})]={t:'s',v:i.city};
        area==lastArea          ?c++  :sheet[XLSX.utils.encode_cell({c:c++,r:r})]={t:'s',v:area};
        i.brand==lastBrand      ?c++  :sheet[XLSX.utils.encode_cell({c:c++,r:r})]={t:'s',v:i.brand};
        sheet[XLSX.utils.encode_cell({c:c++,r:r})]={t:'s',v:i.name};
        sheet[XLSX.utils.encode_cell({c:c++,r:r})]={t:'s',v:i.recommendFood};
        sheet[XLSX.utils.encode_cell({c:c++,r:r})]={t:'n',v:i.price};
        sheet[XLSX.utils.encode_cell({c:c++,r:r})]={t:'n',v:i.dateCanBeStored};
        sheet[XLSX.utils.encode_cell({c:c++,r:r})]={t:'s',v:i.souvenirDetail};
        sheet[XLSX.utils.encode_cell({c:c++,r:r})]={t:'s',v:ot};
        sheet[XLSX.utils.encode_cell({c:c++,r:r++})]={t:'s',v:i.remark};
        lastCity=i.city;
        lastArea=area;
        lastCountry=i.country;
        lastBrand=i.brand;
        //--------------------------- update col width
        sheet['!cols'][0].width = sheet['!cols'][0].width < i.country.length+ratio ? i.country.length+ratio :sheet['!cols'][0].width;
        sheet['!cols'][1].width = sheet['!cols'][1].width < i.city.length+ratio ? i.city.length+ratio :sheet['!cols'][1].width;
        sheet['!cols'][2].width = sheet['!cols'][2].width < area.length+ratio ? area.length+ratio :sheet['!cols'][2].width;
        sheet['!cols'][3].width = sheet['!cols'][3].width < i.brand.length+ratio ? i.brand.length+ratio :sheet['!cols'][3].width;
        sheet['!cols'][4].width = sheet['!cols'][4].width < i.name.length+ratio ? i.name.length+ratio :sheet['!cols'][4].width;
        sheet['!cols'][5].width = sheet['!cols'][5].width < i.recommendFood.length+ratio ? i.recommendFood.length+ratio :sheet['!cols'][5].width;
        sheet['!cols'][6].width = sheet['!cols'][6].width < i.price.toString().length+ratio ? i.price.toString().length+ratio :sheet['!cols'][6].width;
        sheet['!cols'][7].width = sheet['!cols'][7].width < i.dateCanBeStored.toString().length+ratio ? i.dateCanBeStored.toString().length+ratio :sheet['!cols'][7].width;
        sheet['!cols'][8].width = sheet['!cols'][8].width < i.souvenirDetail.length+ratio ? i.souvenirDetail.length+ratio :sheet['!cols'][8].width;
        sheet['!cols'][9].width = sheet['!cols'][9].width < ot.length+ratio ? ot.length+ratio :sheet['!cols'][9].width;
        sheet['!cols'][10].width = sheet['!cols'][10].width < i.remark.length+ratio ? i.remark.length+ratio :sheet['!cols'][10].width;
    }
    sheet['!ref']="A1:"+XLSX.utils.encode_cell({c:c,r:r});
    return sheet;
}









export function trafficSheet(list:Array<TrafficDB>)
{
    let sheet:any={};
    let c=0;
    let r=0;
    let lastCountry="";
    let lastCity="";
    let lastArea="";
    let lastBrand="";
    let ratio=5;
    sheet['!cols']=[];
    //-------------------------------------------------------------------------------sheet header
    sheet[XLSX.utils.encode_cell({c:c++,r:r})]={v:Resource.country,t:'s'};
    sheet[XLSX.utils.encode_cell({c:c++,r:r})]={v:Resource.city,t:'s'};
    sheet[XLSX.utils.encode_cell({c:c++,r:r})]={v:Resource.area,t:'s'};
    sheet[XLSX.utils.encode_cell({c:c++,r:r})]={v:Resource.traffic+Resource.name,t:'s'};
    sheet[XLSX.utils.encode_cell({c:c++,r:r})]={v:Resource.price,t:'s'};
    sheet[XLSX.utils.encode_cell({c:c++,r:r})]={v:Resource.totalTime,t:'s'};
    sheet[XLSX.utils.encode_cell({c:c++,r:r})]={v:Resource.step,t:'s'};
    sheet[XLSX.utils.encode_cell({c:c++,r:r++})]={v:Resource.traffic+Resource.detail,t:'s'};
    sheet['!cols'].push({width:Resource.country.length+ratio});
    sheet['!cols'].push({width:Resource.city.length+ratio});
    sheet['!cols'].push({width:Resource.area.length+ratio});
    sheet['!cols'].push({width:Resource.traffic.length+Resource.name.length+ratio});
    sheet['!cols'].push({width:Resource.price.length+ratio});
    sheet['!cols'].push({width:Resource.totalTime.length+ratio});
    sheet['!cols'].push({width:Resource.step.length+ratio});
    sheet['!cols'].push({width:Resource.traffic.length+Resource.detail.length+ratio});
    //------------------------------------------------------------------------------ sheet body
    for(var i of list)
    {
        c=0;
        let area=i.area.join(" ");
        i.country==lastCountry  ?c++  :sheet[XLSX.utils.encode_cell({c:c++,r:r})]={t:'s',v:i.country};
        i.city==lastCity        ?c++  :sheet[XLSX.utils.encode_cell({c:c++,r:r})]={t:'s',v:i.city};
        area==lastArea          ?c++  :sheet[XLSX.utils.encode_cell({c:c++,r:r})]={t:'s',v:area};
        sheet[XLSX.utils.encode_cell({c:c++,r:r})]={t:'s',v:i.name};
        sheet[XLSX.utils.encode_cell({c:c++,r:r})]={t:'n',v:i.price};
        sheet[XLSX.utils.encode_cell({c:c++,r:r})]={t:'n',v:i.totalTime};
        sheet[XLSX.utils.encode_cell({c:c++,r:r})]={t:'s',v:i.step};
        sheet[XLSX.utils.encode_cell({c:c++,r:r++})]={t:'s',v:i.trafficDetail};
        lastCity=i.city;
        lastArea=area;
        lastCountry=i.country;
        //--------------------------- update col width
        sheet['!cols'][0].width = sheet['!cols'][0].width < i.country.length+ratio ? i.country.length+ratio :sheet['!cols'][0].width;
        sheet['!cols'][1].width = sheet['!cols'][1].width < i.city.length+ratio ? i.city.length+ratio :sheet['!cols'][1].width;
        sheet['!cols'][2].width = sheet['!cols'][2].width < area.length+ratio ? area.length+ratio :sheet['!cols'][2].width;
        sheet['!cols'][3].width = sheet['!cols'][3].width < i.name.length+ratio ? i.name.length+ratio :sheet['!cols'][3].width;
        sheet['!cols'][4].width = sheet['!cols'][4].width < i.price.toString().length+ratio ? i.price.toString().length+ratio :sheet['!cols'][4].width;
        sheet['!cols'][5].width = sheet['!cols'][5].width < i.totalTime.toString().length+ratio ? i.totalTime.toString().length+ratio :sheet['!cols'][5].width;
        sheet['!cols'][6].width = sheet['!cols'][6].width < i.step.length+ratio ? i.step.length+ratio :sheet['!cols'][6].width;
        sheet['!cols'][7].width = sheet['!cols'][7].width < i.trafficDetail.length+ratio ? i.trafficDetail.length+ratio :sheet['!cols'][7].width;
    }
    sheet['!ref']="A1:"+XLSX.utils.encode_cell({c:c,r:r});
    return sheet;
}



export function attractionListSort(arr:Array<AttractionDB>,setting:PlanReportSetting)
{
    return arr.sort(function(a,b)
    {
        if(a.country>b.country)
            return 1;
        else if(a.country<b.country)
            return -1;
        else if(a.city>b.city)
            return 1;
        else if(a.city<b.city)
            return -1;
        else
        {
            let r=setting.attractionSetting.order ?-1:1;
            switch(setting.attractionSetting.priority)
            {
                case PlanReportSetting.openTime:
                    return (TimeCheck.hhmmStringToValue(a.openTime[0][0])-TimeCheck.hhmmStringToValue(b.openTime[0][0]))*r;
            }
        }
    });
}
export function restaurantListSort(arr:Array<RestaurantDB>,setting:PlanReportSetting)
{
    return arr.sort(function(a,b)
    {
        if(a.country>b.country)
            return 1;
        else if(a.country<b.country)
            return -1;
        else if(a.city>b.city)
            return 1;
        else if(a.city<b.city)
            return -1;
        else
        {
            let r=setting.restaurantSetting.order ?-1:1;
            switch(setting.attractionSetting.priority)
            {
                case PlanReportSetting.openTime:
                    return (TimeCheck.hhmmStringToValue(a.openTime[0][0])-TimeCheck.hhmmStringToValue(b.openTime[0][0]))*r;
                case PlanReportSetting.price:
                    return (a.priceRange[0]-b.priceRange[0])*r;
            }
        }
    });
}
export function souvenirListSort(arr:Array<SouvenirDB>,setting:PlanReportSetting)
{
    return arr.sort(function(a,b)
    {
        if(a.country>b.country)
            return 1;
        else if(a.country<b.country)
            return -1;
        else if(a.city>b.city)
            return 1;
        else if(a.city<b.city)
            return -1;
        else 
        {
            let r=setting.restaurantSetting.order ?-1:1;
            switch(setting.attractionSetting.priority)
            {
                case PlanReportSetting.openTime:
                    return (TimeCheck.hhmmStringToValue(a.openTime[0][0])-TimeCheck.hhmmStringToValue(b.openTime[0][0]))*r;
                case PlanReportSetting.price:
                    return (a.price-b.price)*r;
                case PlanReportSetting.day:
                    return (a.dateCanBeStored - b.dateCanBeStored)*r;
            }
        }
    });
}
export function trafficListSort(arr:Array<TrafficDB>,setting:PlanReportSetting)
{
    return arr.sort(function(a,b)
    {
        if(a.country>b.country)
            return 1;
        else if(a.country<b.country)
            return -1;
        else if(a.city>b.city)
            return 1;
        else if(a.city<b.city)
            return -1;
        else 
        {
            let r=setting.restaurantSetting.order ?-1:1;
            switch(setting.attractionSetting.priority)
            {
                case PlanReportSetting.total:
                    return (a.totalTime -b.totalTime)*r;
            }
        }
    });
}
