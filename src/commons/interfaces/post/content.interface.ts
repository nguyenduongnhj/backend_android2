import { ContentType } from "src/commons/enum/content-type.enum";

export default interface Content{ 
    text: String
    image: [String]
    video: [String]
    type: ContentType
}