"use client";

import { motion } from 'framer-motion';
import React, {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import {BsArrowUpRight, BsGithub} from 'react-icons/bs';
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,} from "@/components/ui/tooltip"
import Link from "next/link";
import Image from "next/image";
import { Description } from '@radix-ui/react-dialog';

const projects = [
  {
    num: '01',
    category: 'frontend',
    title: 'project 1',
    description:'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    stack: [
      {name: 'Html 5'},{name: "Css 3"}, {name: 'Javascript'}],
      image: '',
    },
]


const Work = () => {
  return <div>Work</div>;
};

export default Work;