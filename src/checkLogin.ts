import { AxiosResponse } from 'axios';
import {load} from 'cheerio';

export default function checkLogin(response:AxiosResponse):boolean{
    if(response?.data){
        let $ = load(response.data);

        if($('form.login_form').length == 0){//loginform없음
            return true;
        }
        else{//loginform있음
            return false;
        }
    }
    else{
        return false;
    }
}