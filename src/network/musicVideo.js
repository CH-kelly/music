import {getRequest} from "./request";

export function getGroupList(){
  return getRequest({
    url:"/video/group/list"
  })
}
