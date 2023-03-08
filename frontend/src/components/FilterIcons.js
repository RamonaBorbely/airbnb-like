import { TbBeach, TbUfo, TbPool, TbBuildingCastle, TbChefHat, TbBuildingStore, TbTemperature, TbBuildingArch, TbBuildingTunnel } from 'react-icons/tb'
import { GiWoodCabin, GiBowlingPin, GiPaperBoat, GiBarn, GiIsland, GiCastle, GiTreehouse, GiGrandPiano, GiDesert, GiWindmill, GiFarmTractor, GiTreeGrowth, GiPisaTower, GiCaveEntrance, GiPalmTree, GiGrapes, GiSkis, GiVikingLonghouse, GiBlockHouse, GiMushroomHouse, GiBirdHouse, GiByzantinTemple, GiGreekTemple, GiBoatFishing, GiBoatHorizon } from 'react-icons/gi'
import { CgHome } from 'react-icons/cg'
import { ImHome } from 'react-icons/im'
import { MdOutlineSurfing, MdSportsGolf, MdOutlineCastle, MdOutlineHouseboat } from 'react-icons/md'
import { FaCaravan, FaUmbrellaBeach, FaSkiing, FaBed, FaCampground } from 'react-icons/fa'
import { CiMountain1 } from 'react-icons/ci'
import { IoSnowOutline } from 'react-icons/io5'
import { RiCaravanFill, RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'
import { AiOutlineFire, AiOutlineFundView } from 'react-icons/ai'
import { HiOutlineHomeModern, HiPaintBrush } from 'react-icons/hi2'
import { TfiHome } from 'react-icons/tfi'
import { BsUiChecksGrid, BsSnapchat } from 'react-icons/bs'
import { VscKey } from 'react-icons/vsc'
import { SlCup } from 'react-icons/sl'
import { SiClickhouse } from 'react-icons/si'
import { CgShapeTriangle } from 'react-icons/cg'
import { ImBasecamp } from 'react-icons/im'
import Icon from './Icon' 
import '../assets/css/style.css'
import { useState } from 'react'

const iconsList = [
    {   id: 1,
        icon: <AiOutlineFundView />,
        desc: "Amazing views"
    },
    {   id: 2,
        icon: <TbBeach />,
        desc: "Beachfront"
    },
    {   id: 3,
        icon: <GiWoodCabin />,
        desc: "Cabins"
    },
  
    {   id: 4,
        icon: <GiBowlingPin />,
        desc: "Play"
    },
    {
        id: 5,
        icon: <CgHome />,
        desc: "Earth homes"
    },
    {
        id: 6,
        icon: <ImHome />,
        desc: "Mansions"
    },
    {   id: 7,
        icon: <BsSnapchat />,
        desc: "Luxe"
    },
    {   id: 8,
        icon: <RiCaravanFill />,
        desc: "Sheperd's hust"
    },
    {   id: 9,
        icon: <TbUfo />,
        desc: "OMG!"
    },
    {   id: 10,
        icon: <GiPaperBoat />,
        desc: "Boats!"
    },
    {   id: 11,
        icon: <GiBarn />,
        desc: "Barns!"
    },
    {   id: 12,
        icon: <GiFarmTractor />,
        desc: "Countryside!"
    },
    {   id: 13,
        icon: <TbBuildingCastle />,
        desc: "Dammusi"
    },
    {   id: 14,
        icon: <GiIsland />,
        desc: "Islands"
    },
    {   id: 15,
        icon: <AiOutlineFire />,
        desc: "Trending"
    },
    {   id: 16,
        icon: <GiCastle />,
        desc: "Castles"
    },
    {   id: 17,
        icon: <TbPool />,
        desc: "Amazing Pools"
    },
    {   id: 18,
        icon: <FaSkiing />,
        desc: "Ski-in/out"
    },
    {   id: 19,
        icon: <GiTreeGrowth />,
        desc: "National parks"
    },
    {   id: 20,
        icon: <GiTreehouse />,
        desc: "Treehouses"
    },
    {   id: 21,
        icon: <HiOutlineHomeModern />,
        desc: "Design"
    },
    {   id: 22,
        icon: <GiBoatHorizon />,
        desc: "Lakefront"
    },
    {   id: 23,
        icon: <BsUiChecksGrid />,
        desc: "Off-the-grid"
    },
    {   id: 24,
        icon: <GiVikingLonghouse />,
        desc: "Casas particulares"
    },
    {   id: 25,
        icon: <TfiHome />,
        desc: "Tiny homes"
    },
    {   id: 26,
        icon: <MdOutlineCastle />,
        desc: "Historical homes"
    },
    {   id: 27,
        icon: <MdOutlineHouseboat />,
        desc: "Houseboats"
    },
    {   id: 28,
        icon: <FaBed />,
        desc: "Private rooms"
    },
    {   id: 29,
        icon: <GiPisaTower />,
        desc: "Iconic cities"
    },
    {   id: 30,
        icon: <GiCaveEntrance />,
        desc: "Caves"
    },
    {   id: 31,
        icon: <GiPalmTree />,
        desc: "Tropical"
    },
    {   id: 32,
        icon: <GiMushroomHouse />,
        desc: "Farms"
    },
    {   id: 33,
        icon: <GiBoatFishing />,
        desc: "Lake"
    },
    {   id: 34,
        icon: <GiBlockHouse />,
        desc: "Ryokans"
    },
    {   id: 35,
        icon: <TbChefHat />,
        desc: "Chef's kitchens"
    },
    {   id: 36,
        icon: <SiClickhouse />,
        desc: "Containers"
    },
    {   id: 37,
        icon: <HiPaintBrush />,
        desc: "Creative spaces"
    },
    {   id: 38,
        icon: <VscKey />,
        desc: "New"
    },
    {   id: 39,
        icon: <GiGrapes />,
        desc: "Vineyards"
    },
    {   id: 40,
        icon: <MdOutlineSurfing />,
        desc: "Surfing"
    },
    {   id: 41,
        icon: <GiSkis />,
        desc: "Skiing"
    },
    {   id: 42,
        icon: <TbBuildingTunnel />,
        desc: "Domes"
    },
    {   id: 43,
        icon: <SlCup />,
        desc: "Bed & breakfasts"
    },
    {   id: 44, 
        icon: <GiGrandPiano />,
        desc: "Grand Pianos"
    },
    {   id: 45,
        icon: <GiGreekTemple />,
        desc: "Cycladic homes"
    },
    {   id: 46,
        icon: <ImBasecamp />,
        desc: "Yurts"
    },
    {   id: 47,
        icon: <FaCampground />,
        desc: "Camping"
    },
    {   id: 48,
        icon: <TbBuildingArch />,
        desc: "Riads"
    },
    {   id: 49,
        icon: <IoSnowOutline />,
        desc: "Artic"
    },
    {   id: 50,
        icon: <GiWindmill />,
        desc: "Windmills"
    },
    {   id: 51,
        icon: <CgShapeTriangle />,
        desc: "A-frames"
    },
    {   id: 52,
        icon: <CiMountain1 />,
        desc: "Top of the world"
    },
    {   id: 53,
        icon: <GiByzantinTemple />,
        desc: "Trulli"
    },
    {   id: 54,
        icon: <GiDesert />,
        desc: "Desert"
    },
    {   id: 55,
        icon: <MdSportsGolf />,
        desc: "Golfing"
    },
    {   id: 56,
        icon: <TbTemperature />,
        desc: "Adapted"
    },
    {   id: 57,
        icon: <TbBuildingStore />,
        desc: "Minsus"
    },
    {   id: 58,
        icon: <GiBirdHouse />,
        desc: "Hanoks"
    },
    {   id: 59,
        icon: <FaCaravan />,
        desc: "Campervans"
    },
    {   id: 60,
        icon: <FaUmbrellaBeach />,
        desc: "Beaches"
    },

]

const FilterIcons = () => {
   const [icons, setIcons] = useState(iconsList)
   const [visibleIcons, setVisibleIcons] = useState(12)

   const handleClickLeft = () => {
    setVisibleIcons(prev => prev + 5)
   }

  return (
    <div className='filter-icons'>
        <RiArrowLeftSLine onClick={handleClickLeft}/>
        {icons.slice(0, visibleIcons).map(icn => (
            <Icon key={icn.id} icon={icn.icon} desc={icn.desc}/>
        ))}
        <RiArrowRightSLine />
    </div>
  )
}

export default FilterIcons
