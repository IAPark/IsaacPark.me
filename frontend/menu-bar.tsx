import * as React from "react";
import {IconLink} from "./icon-link";

interface Props {
    children?: any
}

export function MenuBar (props: Props) {
    return  <div className='menu-bar'>
                <IconLink icon='github' href='http://github.com/iapark'/>
                <IconLink icon='linkedin' href='https://www.linkedin.com/in/isaac-park-a95280a3/'/>
                <IconLink icon='facebook'  href='https://www.facebook.com/isaac.a.park'/>
                <IconLink icon='resume' href='/public/resume.pdf'/>
                <IconLink icon='globe' href='http://old.isaacpark.me/'>
                    Old Site
                </IconLink>
            </div>
}