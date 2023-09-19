import { SectionHeadStyles } from "@/styles/ComponentStyles/Text";
import { FunctionComponent } from "react";
import styled from "styled-components";


interface ISectionHead{
    textOne : string;
    textTwo : string;
}
export const SectionHead:FunctionComponent<ISectionHead> = ({textOne,textTwo})=>{
    return(
        <SectionHeadStyles>
            <h3>{textOne}</h3>
            <h3 className="color">{textTwo}</h3>
        </SectionHeadStyles>
    )
}