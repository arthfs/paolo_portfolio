import React from 'react'
import Bracelets from './bracelets';
import Waistchains from './waistchains';
import Anklechains from './anklechains';
import Necklaces from './necklaces';
import Keyholders from './keyholders';

export default function Page({info}) {
   
    if (info =="/") { 
        return <Bracelets/>
}
        else if (info =="/waistchains") 
    { 
        return <Waistchains/>
    }

    else if (info =="/anklechains") 
    { 
        return <Anklechains/>
    }

    else if (info =="/necklaces") 
    { 
        return <Necklaces/>
    }

    else if (info =="/keyholders") 
    { 
        return <Keyholders/>
    }
   
}
