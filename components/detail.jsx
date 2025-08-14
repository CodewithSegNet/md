import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import desktop from '../assets/image11.jpg';
import desktop2 from '../assets/image12.jpg'
import desktop3 from '../assets/image13.jpg'
import backs from '../assets/back.svg';
import desktop4 from '../assets/image191.jpg'
import desktop5 from '../assets/image181.jpg'
import desktop6 from '../assets/image171.jpg'
import desktop7 from '../assets/image161.jpg'
import desktop8 from '../assets/image151.jpg'
import desktop9 from '../assets/image141.jpg'
import '../App.css';
import '../index.css';

// Sample blog data (same as in the Blog component)
const sampleBlogData = [
  {
    id: 1,
    image: desktop,
    title: "Parenting Adolescent Children",
    content: [
      { type: 'h3', text: 'Parenting Adolescent Children' },
      { type: 'p', text: "Considering parents and their teenagers, adolescence is mostly a frustrating and disturbing period for both. It may be a struggle to learn how to improve your child's parenting and your relationship with your child. Your teenage kid is always working out how to be free because this is the time that they believe they know it all. But this period is when they need you the most because it is a crucial period for them. They need plenty of your time to teach them the right way to deal with problems or to get them up when they're down, just the same as when they were toddlers. I have two young teens, a girl, and a boy. So apart from praying for guidance, I always seek for better ways to improve my parenting skills and here are a few tips to keep in mind that has helped me so far on how to deal with adolescent child/children." },
      { type: 'h3', text: "Mindset Approach" },
      { type: 'p', text: "The way of dealing with adolescent child/children needs to change as children grows. Strategies that worked with small kids won't work with teenagers. Young adolescents need various standards from older adolescents. Your methodology needs to suit the kid's phase of improvement. As your child ages, your method of coping with your teenage child/children mustchange. Strategies that work for young children won't work for teens. Young teens require different expectations than older teenagers. Your approach needs to suit the stage of development for the kid. However, you most know that when you are still in charge, they will rely on as much as possible, on you.  " },
      { type: 'h3', text: 'Being dismissed or rejected' },
    { type: 'p', text: "Sometimes, parents of adolescents can feel dismissed, which can be particularly awful. You may feel ignored, humiliated, opposed, condemned, disrespected, or ridiculed. In some cases, you will always be their topic of gossip among themselves if your children are anything like mine. Responding in a helpful way appears to be challenging. To find the maturity of yourself, the safest methodology is to understand that this rejection is vital for their growing up because it helps them become more independent, and it’s ok to let some of it wash over you. In any situation, you have the right to be clear about how you need to be dealt with as a parent and what repercussions there are if this is not considered." },
    
    { type: 'h3', text: "Ensure there are boundaries" },
    { type: 'p', text: "For your teenager, strict boundaries are important. As a parent, there is always an opportunity to be adamant on what you will accept and what you won't. Many teens can complain and rebel somewhat, but they still need boundaries to be set and enforced by you so that they know that they are truly concentrated on and protected. Ensure that the boundaries are sensible. Choices, rather than your gain, should be in the best interest of your teenager. At a time when a warm and loving relationship can be preserved, needless constraints will cause turmoil. It may be a perfect chance for some potential options to be allowed." },
    { type: 'h3', text: "Advising your teenager" },
        { type: 'p', text: "As your child continues to grow, there will be constant need for advice. Your child will ask for advice now and then, and you should always be able and ready to answer. That’s why it’s very important to stay informed with happenings and current affairs. When your teenager opens to get advice from you, it means they look up to you and your opinions and guidance matters to them. Your perspective into the universe could be helpful. Nevertheless, it is necessary to display appreciation simultaneously. It is a preferred approach to propose things, and to encourage them to choose what to do, over directing/forcing them." },
    { type: 'h3', text: "Anger Management" },
        { type: 'p', text: "In adolescence, anger is a common emotion. It is common and powerful. The outrage against parents can be part of distancing themselves from you and strengthening their desire to be independent. Especially in single parents’ home. Nonetheless, becoming angry should not be an excuse for actions, such as aggression or brutality. As a parent you can help your teens manage their anger by using mental and emotional analysis which involves you asking them how they feel and why they feel the way they do. This method helps you detect the purpose of their anger and how you can help them manage the anger in ways to keep them calm, speak and cope well with anger." },



]
  },
  {
    id: 2,
    image: desktop2,
    title: "Balancing Childcare and Work as a Single Mom",
    content: [
      { type: 'h3', text: 'Parenting Adolescent Children' },
      { type: 'p', text: "Considering parents and their teenagers, adolescence is mostly a frustrating and disturbing period for both. It may be a struggle to learn how to improve your child's parenting and your relationship with your child. Your teenage kid is always working out how to be free because this is the time that they believe they know it all. But this period is when they need you the most because it is a crucial period for them. They need plenty of your time to teach them the right way to deal with problems or to get them up when they're down, just the same as when they were toddlers. I have two young teens, a girl, and a boy. So apart from praying for guidance, I always seek for better ways to improve my parenting skills and here are a few tips to keep in mind that has helped me so far on how to deal with adolescent child/children." },
      { type: 'h3', text: "Mindset Approach" },
      { type: 'p', text: "The way of dealing with adolescent child/children needs to change as children grows. Strategies that worked with small kids won't work with teenagers. Young adolescents need various standards from older adolescents. Your methodology needs to suit the kid's phase of improvement. As your child ages, your method of coping with your teenage child/children mustchange. Strategies that work for young children won't work for teens. Young teens require different expectations than older teenagers. Your approach needs to suit the stage of development for the kid. However, you most know that when you are still in charge, they will rely on as much as possible, on you.  " },
      { type: 'h3', text: 'Being dismissed or rejected' },
    { type: 'p', text: "Sometimes, parents of adolescents can feel dismissed, which can be particularly awful. You may feel ignored, humiliated, opposed, condemned, disrespected, or ridiculed. In some cases, you will always be their topic of gossip among themselves if your children are anything like mine. Responding in a helpful way appears to be challenging. To find the maturity of yourself, the safest methodology is to understand that this rejection is vital for their growing up because it helps them become more independent, and it’s ok to let some of it wash over you. In any situation, you have the right to be clear about how you need to be dealt with as a parent and what repercussions there are if this is not considered." },
    
    { type: 'h3', text: "Ensure there are boundaries" },
    { type: 'p', text: "For your teenager, strict boundaries are important. As a parent, there is always an opportunity to be adamant on what you will accept and what you won't. Many teens can complain and rebel somewhat, but they still need boundaries to be set and enforced by you so that they know that they are truly concentrated on and protected. Ensure that the boundaries are sensible. Choices, rather than your gain, should be in the best interest of your teenager. At a time when a warm and loving relationship can be preserved, needless constraints will cause turmoil. It may be a perfect chance for some potential options to be allowed." },
    { type: 'h3', text: "Advising your teenager" },
        { type: 'p', text: "As your child continues to grow, there will be constant need for advice. Your child will ask for advice now and then, and you should always be able and ready to answer. That’s why it’s very important to stay informed with happenings and current affairs. When your teenager opens to get advice from you, it means they look up to you and your opinions and guidance matters to them. Your perspective into the universe could be helpful. Nevertheless, it is necessary to display appreciation simultaneously. It is a preferred approach to propose things, and to encourage them to choose what to do, over directing/forcing them." },
    { type: 'h3', text: "Anger Management" },
        { type: 'p', text: "In adolescence, anger is a common emotion. It is common and powerful. The outrage against parents can be part of distancing themselves from you and strengthening their desire to be independent. Especially in single parents’ home. Nonetheless, becoming angry should not be an excuse for actions, such as aggression or brutality. As a parent you can help your teens manage their anger by using mental and emotional analysis which involves you asking them how they feel and why they feel the way they do. This method helps you detect the purpose of their anger and how you can help them manage the anger in ways to keep them calm, speak and cope well with anger." },



]
  },
  {
    id: 3,
    image: desktop3,
    title: "Drifting Apart in Marriage ",
     content: [
      { type: 'h3', text: 'Parenting Adolescent Children' },
      { type: 'p', text: "Considering parents and their teenagers, adolescence is mostly a frustrating and disturbing period for both. It may be a struggle to learn how to improve your child's parenting and your relationship with your child. Your teenage kid is always working out how to be free because this is the time that they believe they know it all. But this period is when they need you the most because it is a crucial period for them. They need plenty of your time to teach them the right way to deal with problems or to get them up when they're down, just the same as when they were toddlers. I have two young teens, a girl, and a boy. So apart from praying for guidance, I always seek for better ways to improve my parenting skills and here are a few tips to keep in mind that has helped me so far on how to deal with adolescent child/children." },
      { type: 'h3', text: "Mindset Approach" },
      { type: 'p', text: "The way of dealing with adolescent child/children needs to change as children grows. Strategies that worked with small kids won't work with teenagers. Young adolescents need various standards from older adolescents. Your methodology needs to suit the kid's phase of improvement. As your child ages, your method of coping with your teenage child/children mustchange. Strategies that work for young children won't work for teens. Young teens require different expectations than older teenagers. Your approach needs to suit the stage of development for the kid. However, you most know that when you are still in charge, they will rely on as much as possible, on you.  " },
      { type: 'h3', text: 'Being dismissed or rejected' },
    { type: 'p', text: "Sometimes, parents of adolescents can feel dismissed, which can be particularly awful. You may feel ignored, humiliated, opposed, condemned, disrespected, or ridiculed. In some cases, you will always be their topic of gossip among themselves if your children are anything like mine. Responding in a helpful way appears to be challenging. To find the maturity of yourself, the safest methodology is to understand that this rejection is vital for their growing up because it helps them become more independent, and it’s ok to let some of it wash over you. In any situation, you have the right to be clear about how you need to be dealt with as a parent and what repercussions there are if this is not considered." },
    
    { type: 'h3', text: "Ensure there are boundaries" },
    { type: 'p', text: "For your teenager, strict boundaries are important. As a parent, there is always an opportunity to be adamant on what you will accept and what you won't. Many teens can complain and rebel somewhat, but they still need boundaries to be set and enforced by you so that they know that they are truly concentrated on and protected. Ensure that the boundaries are sensible. Choices, rather than your gain, should be in the best interest of your teenager. At a time when a warm and loving relationship can be preserved, needless constraints will cause turmoil. It may be a perfect chance for some potential options to be allowed." },
    { type: 'h3', text: "Advising your teenager" },
        { type: 'p', text: "As your child continues to grow, there will be constant need for advice. Your child will ask for advice now and then, and you should always be able and ready to answer. That’s why it’s very important to stay informed with happenings and current affairs. When your teenager opens to get advice from you, it means they look up to you and your opinions and guidance matters to them. Your perspective into the universe could be helpful. Nevertheless, it is necessary to display appreciation simultaneously. It is a preferred approach to propose things, and to encourage them to choose what to do, over directing/forcing them." },
    { type: 'h3', text: "Anger Management" },
        { type: 'p', text: "In adolescence, anger is a common emotion. It is common and powerful. The outrage against parents can be part of distancing themselves from you and strengthening their desire to be independent. Especially in single parents’ home. Nonetheless, becoming angry should not be an excuse for actions, such as aggression or brutality. As a parent you can help your teens manage their anger by using mental and emotional analysis which involves you asking them how they feel and why they feel the way they do. This method helps you detect the purpose of their anger and how you can help them manage the anger in ways to keep them calm, speak and cope well with anger." },



]
  },
  {
    id: 4,
    image: desktop9,
    title: "How being a mother without emotional, psychological and financial support affects women's health",
     content: [
      { type: 'h3', text: 'Parenting Adolescent Children' },
      { type: 'p', text: "Considering parents and their teenagers, adolescence is mostly a frustrating and disturbing period for both. It may be a struggle to learn how to improve your child's parenting and your relationship with your child. Your teenage kid is always working out how to be free because this is the time that they believe they know it all. But this period is when they need you the most because it is a crucial period for them. They need plenty of your time to teach them the right way to deal with problems or to get them up when they're down, just the same as when they were toddlers. I have two young teens, a girl, and a boy. So apart from praying for guidance, I always seek for better ways to improve my parenting skills and here are a few tips to keep in mind that has helped me so far on how to deal with adolescent child/children." },
      { type: 'h3', text: "Mindset Approach" },
      { type: 'p', text: "The way of dealing with adolescent child/children needs to change as children grows. Strategies that worked with small kids won't work with teenagers. Young adolescents need various standards from older adolescents. Your methodology needs to suit the kid's phase of improvement. As your child ages, your method of coping with your teenage child/children mustchange. Strategies that work for young children won't work for teens. Young teens require different expectations than older teenagers. Your approach needs to suit the stage of development for the kid. However, you most know that when you are still in charge, they will rely on as much as possible, on you.  " },
      { type: 'h3', text: 'Being dismissed or rejected' },
    { type: 'p', text: "Sometimes, parents of adolescents can feel dismissed, which can be particularly awful. You may feel ignored, humiliated, opposed, condemned, disrespected, or ridiculed. In some cases, you will always be their topic of gossip among themselves if your children are anything like mine. Responding in a helpful way appears to be challenging. To find the maturity of yourself, the safest methodology is to understand that this rejection is vital for their growing up because it helps them become more independent, and it’s ok to let some of it wash over you. In any situation, you have the right to be clear about how you need to be dealt with as a parent and what repercussions there are if this is not considered." },
    
    { type: 'h3', text: "Ensure there are boundaries" },
    { type: 'p', text: "For your teenager, strict boundaries are important. As a parent, there is always an opportunity to be adamant on what you will accept and what you won't. Many teens can complain and rebel somewhat, but they still need boundaries to be set and enforced by you so that they know that they are truly concentrated on and protected. Ensure that the boundaries are sensible. Choices, rather than your gain, should be in the best interest of your teenager. At a time when a warm and loving relationship can be preserved, needless constraints will cause turmoil. It may be a perfect chance for some potential options to be allowed." },
    { type: 'h3', text: "Advising your teenager" },
        { type: 'p', text: "As your child continues to grow, there will be constant need for advice. Your child will ask for advice now and then, and you should always be able and ready to answer. That’s why it’s very important to stay informed with happenings and current affairs. When your teenager opens to get advice from you, it means they look up to you and your opinions and guidance matters to them. Your perspective into the universe could be helpful. Nevertheless, it is necessary to display appreciation simultaneously. It is a preferred approach to propose things, and to encourage them to choose what to do, over directing/forcing them." },
    { type: 'h3', text: "Anger Management" },
        { type: 'p', text: "In adolescence, anger is a common emotion. It is common and powerful. The outrage against parents can be part of distancing themselves from you and strengthening their desire to be independent. Especially in single parents’ home. Nonetheless, becoming angry should not be an excuse for actions, such as aggression or brutality. As a parent you can help your teens manage their anger by using mental and emotional analysis which involves you asking them how they feel and why they feel the way they do. This method helps you detect the purpose of their anger and how you can help them manage the anger in ways to keep them calm, speak and cope well with anger." },



]
  },
  {
    id: 5,
    image: desktop8,
    title: "Self Love",
     content: [
      { type: 'h3', text: 'Parenting Adolescent Children' },
      { type: 'p', text: "Considering parents and their teenagers, adolescence is mostly a frustrating and disturbing period for both. It may be a struggle to learn how to improve your child's parenting and your relationship with your child. Your teenage kid is always working out how to be free because this is the time that they believe they know it all. But this period is when they need you the most because it is a crucial period for them. They need plenty of your time to teach them the right way to deal with problems or to get them up when they're down, just the same as when they were toddlers. I have two young teens, a girl, and a boy. So apart from praying for guidance, I always seek for better ways to improve my parenting skills and here are a few tips to keep in mind that has helped me so far on how to deal with adolescent child/children." },
      { type: 'h3', text: "Mindset Approach" },
      { type: 'p', text: "The way of dealing with adolescent child/children needs to change as children grows. Strategies that worked with small kids won't work with teenagers. Young adolescents need various standards from older adolescents. Your methodology needs to suit the kid's phase of improvement. As your child ages, your method of coping with your teenage child/children mustchange. Strategies that work for young children won't work for teens. Young teens require different expectations than older teenagers. Your approach needs to suit the stage of development for the kid. However, you most know that when you are still in charge, they will rely on as much as possible, on you.  " },
      { type: 'h3', text: 'Being dismissed or rejected' },
    { type: 'p', text: "Sometimes, parents of adolescents can feel dismissed, which can be particularly awful. You may feel ignored, humiliated, opposed, condemned, disrespected, or ridiculed. In some cases, you will always be their topic of gossip among themselves if your children are anything like mine. Responding in a helpful way appears to be challenging. To find the maturity of yourself, the safest methodology is to understand that this rejection is vital for their growing up because it helps them become more independent, and it’s ok to let some of it wash over you. In any situation, you have the right to be clear about how you need to be dealt with as a parent and what repercussions there are if this is not considered." },
    
    { type: 'h3', text: "Ensure there are boundaries" },
    { type: 'p', text: "For your teenager, strict boundaries are important. As a parent, there is always an opportunity to be adamant on what you will accept and what you won't. Many teens can complain and rebel somewhat, but they still need boundaries to be set and enforced by you so that they know that they are truly concentrated on and protected. Ensure that the boundaries are sensible. Choices, rather than your gain, should be in the best interest of your teenager. At a time when a warm and loving relationship can be preserved, needless constraints will cause turmoil. It may be a perfect chance for some potential options to be allowed." },
    { type: 'h3', text: "Advising your teenager" },
        { type: 'p', text: "As your child continues to grow, there will be constant need for advice. Your child will ask for advice now and then, and you should always be able and ready to answer. That’s why it’s very important to stay informed with happenings and current affairs. When your teenager opens to get advice from you, it means they look up to you and your opinions and guidance matters to them. Your perspective into the universe could be helpful. Nevertheless, it is necessary to display appreciation simultaneously. It is a preferred approach to propose things, and to encourage them to choose what to do, over directing/forcing them." },
    { type: 'h3', text: "Anger Management" },
        { type: 'p', text: "In adolescence, anger is a common emotion. It is common and powerful. The outrage against parents can be part of distancing themselves from you and strengthening their desire to be independent. Especially in single parents’ home. Nonetheless, becoming angry should not be an excuse for actions, such as aggression or brutality. As a parent you can help your teens manage their anger by using mental and emotional analysis which involves you asking them how they feel and why they feel the way they do. This method helps you detect the purpose of their anger and how you can help them manage the anger in ways to keep them calm, speak and cope well with anger." },



]
  },
  {
    id: 6,
    image: desktop7,
    title: "Role Model",
   content: [
      { type: 'h3', text: 'Parenting Adolescent Children' },
      { type: 'p', text: "Considering parents and their teenagers, adolescence is mostly a frustrating and disturbing period for both. It may be a struggle to learn how to improve your child's parenting and your relationship with your child. Your teenage kid is always working out how to be free because this is the time that they believe they know it all. But this period is when they need you the most because it is a crucial period for them. They need plenty of your time to teach them the right way to deal with problems or to get them up when they're down, just the same as when they were toddlers. I have two young teens, a girl, and a boy. So apart from praying for guidance, I always seek for better ways to improve my parenting skills and here are a few tips to keep in mind that has helped me so far on how to deal with adolescent child/children." },
      { type: 'h3', text: "Mindset Approach" },
      { type: 'p', text: "The way of dealing with adolescent child/children needs to change as children grows. Strategies that worked with small kids won't work with teenagers. Young adolescents need various standards from older adolescents. Your methodology needs to suit the kid's phase of improvement. As your child ages, your method of coping with your teenage child/children mustchange. Strategies that work for young children won't work for teens. Young teens require different expectations than older teenagers. Your approach needs to suit the stage of development for the kid. However, you most know that when you are still in charge, they will rely on as much as possible, on you.  " },
      { type: 'h3', text: 'Being dismissed or rejected' },
    { type: 'p', text: "Sometimes, parents of adolescents can feel dismissed, which can be particularly awful. You may feel ignored, humiliated, opposed, condemned, disrespected, or ridiculed. In some cases, you will always be their topic of gossip among themselves if your children are anything like mine. Responding in a helpful way appears to be challenging. To find the maturity of yourself, the safest methodology is to understand that this rejection is vital for their growing up because it helps them become more independent, and it’s ok to let some of it wash over you. In any situation, you have the right to be clear about how you need to be dealt with as a parent and what repercussions there are if this is not considered." },
    
    { type: 'h3', text: "Ensure there are boundaries" },
    { type: 'p', text: "For your teenager, strict boundaries are important. As a parent, there is always an opportunity to be adamant on what you will accept and what you won't. Many teens can complain and rebel somewhat, but they still need boundaries to be set and enforced by you so that they know that they are truly concentrated on and protected. Ensure that the boundaries are sensible. Choices, rather than your gain, should be in the best interest of your teenager. At a time when a warm and loving relationship can be preserved, needless constraints will cause turmoil. It may be a perfect chance for some potential options to be allowed." },
    { type: 'h3', text: "Advising your teenager" },
        { type: 'p', text: "As your child continues to grow, there will be constant need for advice. Your child will ask for advice now and then, and you should always be able and ready to answer. That’s why it’s very important to stay informed with happenings and current affairs. When your teenager opens to get advice from you, it means they look up to you and your opinions and guidance matters to them. Your perspective into the universe could be helpful. Nevertheless, it is necessary to display appreciation simultaneously. It is a preferred approach to propose things, and to encourage them to choose what to do, over directing/forcing them." },
    { type: 'h3', text: "Anger Management" },
        { type: 'p', text: "In adolescence, anger is a common emotion. It is common and powerful. The outrage against parents can be part of distancing themselves from you and strengthening their desire to be independent. Especially in single parents’ home. Nonetheless, becoming angry should not be an excuse for actions, such as aggression or brutality. As a parent you can help your teens manage their anger by using mental and emotional analysis which involves you asking them how they feel and why they feel the way they do. This method helps you detect the purpose of their anger and how you can help them manage the anger in ways to keep them calm, speak and cope well with anger." },



]
  },
  {
    id: 7,
    image: desktop6,
    title: "Amicably co-parenting",
     content: [
      { type: 'h3', text: 'Parenting Adolescent Children' },
      { type: 'p', text: "Considering parents and their teenagers, adolescence is mostly a frustrating and disturbing period for both. It may be a struggle to learn how to improve your child's parenting and your relationship with your child. Your teenage kid is always working out how to be free because this is the time that they believe they know it all. But this period is when they need you the most because it is a crucial period for them. They need plenty of your time to teach them the right way to deal with problems or to get them up when they're down, just the same as when they were toddlers. I have two young teens, a girl, and a boy. So apart from praying for guidance, I always seek for better ways to improve my parenting skills and here are a few tips to keep in mind that has helped me so far on how to deal with adolescent child/children." },
      { type: 'h3', text: "Mindset Approach" },
      { type: 'p', text: "The way of dealing with adolescent child/children needs to change as children grows. Strategies that worked with small kids won't work with teenagers. Young adolescents need various standards from older adolescents. Your methodology needs to suit the kid's phase of improvement. As your child ages, your method of coping with your teenage child/children mustchange. Strategies that work for young children won't work for teens. Young teens require different expectations than older teenagers. Your approach needs to suit the stage of development for the kid. However, you most know that when you are still in charge, they will rely on as much as possible, on you.  " },
      { type: 'h3', text: 'Being dismissed or rejected' },
    { type: 'p', text: "Sometimes, parents of adolescents can feel dismissed, which can be particularly awful. You may feel ignored, humiliated, opposed, condemned, disrespected, or ridiculed. In some cases, you will always be their topic of gossip among themselves if your children are anything like mine. Responding in a helpful way appears to be challenging. To find the maturity of yourself, the safest methodology is to understand that this rejection is vital for their growing up because it helps them become more independent, and it’s ok to let some of it wash over you. In any situation, you have the right to be clear about how you need to be dealt with as a parent and what repercussions there are if this is not considered." },
    
    { type: 'h3', text: "Ensure there are boundaries" },
    { type: 'p', text: "For your teenager, strict boundaries are important. As a parent, there is always an opportunity to be adamant on what you will accept and what you won't. Many teens can complain and rebel somewhat, but they still need boundaries to be set and enforced by you so that they know that they are truly concentrated on and protected. Ensure that the boundaries are sensible. Choices, rather than your gain, should be in the best interest of your teenager. At a time when a warm and loving relationship can be preserved, needless constraints will cause turmoil. It may be a perfect chance for some potential options to be allowed." },
    { type: 'h3', text: "Advising your teenager" },
        { type: 'p', text: "As your child continues to grow, there will be constant need for advice. Your child will ask for advice now and then, and you should always be able and ready to answer. That’s why it’s very important to stay informed with happenings and current affairs. When your teenager opens to get advice from you, it means they look up to you and your opinions and guidance matters to them. Your perspective into the universe could be helpful. Nevertheless, it is necessary to display appreciation simultaneously. It is a preferred approach to propose things, and to encourage them to choose what to do, over directing/forcing them." },
    { type: 'h3', text: "Anger Management" },
        { type: 'p', text: "In adolescence, anger is a common emotion. It is common and powerful. The outrage against parents can be part of distancing themselves from you and strengthening their desire to be independent. Especially in single parents’ home. Nonetheless, becoming angry should not be an excuse for actions, such as aggression or brutality. As a parent you can help your teens manage their anger by using mental and emotional analysis which involves you asking them how they feel and why they feel the way they do. This method helps you detect the purpose of their anger and how you can help them manage the anger in ways to keep them calm, speak and cope well with anger." },



]
  },
  {
    id: 8,
    image: desktop5,
    title: "The Christian woman and Fashion",
     content: [
      { type: 'h3', text: 'Parenting Adolescent Children' },
      { type: 'p', text: "Considering parents and their teenagers, adolescence is mostly a frustrating and disturbing period for both. It may be a struggle to learn how to improve your child's parenting and your relationship with your child. Your teenage kid is always working out how to be free because this is the time that they believe they know it all. But this period is when they need you the most because it is a crucial period for them. They need plenty of your time to teach them the right way to deal with problems or to get them up when they're down, just the same as when they were toddlers. I have two young teens, a girl, and a boy. So apart from praying for guidance, I always seek for better ways to improve my parenting skills and here are a few tips to keep in mind that has helped me so far on how to deal with adolescent child/children." },
      { type: 'h3', text: "Mindset Approach" },
      { type: 'p', text: "The way of dealing with adolescent child/children needs to change as children grows. Strategies that worked with small kids won't work with teenagers. Young adolescents need various standards from older adolescents. Your methodology needs to suit the kid's phase of improvement. As your child ages, your method of coping with your teenage child/children mustchange. Strategies that work for young children won't work for teens. Young teens require different expectations than older teenagers. Your approach needs to suit the stage of development for the kid. However, you most know that when you are still in charge, they will rely on as much as possible, on you.  " },
      { type: 'h3', text: 'Being dismissed or rejected' },
    { type: 'p', text: "Sometimes, parents of adolescents can feel dismissed, which can be particularly awful. You may feel ignored, humiliated, opposed, condemned, disrespected, or ridiculed. In some cases, you will always be their topic of gossip among themselves if your children are anything like mine. Responding in a helpful way appears to be challenging. To find the maturity of yourself, the safest methodology is to understand that this rejection is vital for their growing up because it helps them become more independent, and it’s ok to let some of it wash over you. In any situation, you have the right to be clear about how you need to be dealt with as a parent and what repercussions there are if this is not considered." },
    
    { type: 'h3', text: "Ensure there are boundaries" },
    { type: 'p', text: "For your teenager, strict boundaries are important. As a parent, there is always an opportunity to be adamant on what you will accept and what you won't. Many teens can complain and rebel somewhat, but they still need boundaries to be set and enforced by you so that they know that they are truly concentrated on and protected. Ensure that the boundaries are sensible. Choices, rather than your gain, should be in the best interest of your teenager. At a time when a warm and loving relationship can be preserved, needless constraints will cause turmoil. It may be a perfect chance for some potential options to be allowed." },
    { type: 'h3', text: "Advising your teenager" },
        { type: 'p', text: "As your child continues to grow, there will be constant need for advice. Your child will ask for advice now and then, and you should always be able and ready to answer. That’s why it’s very important to stay informed with happenings and current affairs. When your teenager opens to get advice from you, it means they look up to you and your opinions and guidance matters to them. Your perspective into the universe could be helpful. Nevertheless, it is necessary to display appreciation simultaneously. It is a preferred approach to propose things, and to encourage them to choose what to do, over directing/forcing them." },
    { type: 'h3', text: "Anger Management" },
        { type: 'p', text: "In adolescence, anger is a common emotion. It is common and powerful. The outrage against parents can be part of distancing themselves from you and strengthening their desire to be independent. Especially in single parents’ home. Nonetheless, becoming angry should not be an excuse for actions, such as aggression or brutality. As a parent you can help your teens manage their anger by using mental and emotional analysis which involves you asking them how they feel and why they feel the way they do. This method helps you detect the purpose of their anger and how you can help them manage the anger in ways to keep them calm, speak and cope well with anger." },



]
  },
  {
    id: 9,
    image: desktop4,
    title: "Routines to help Make Your Single-Parent Household Financially Stable",
    content: [
      { type: 'h3', text: 'Parenting Adolescent Children' },
      { type: 'p', text: "Considering parents and their teenagers, adolescence is mostly a frustrating and disturbing period for both. It may be a struggle to learn how to improve your child's parenting and your relationship with your child. Your teenage kid is always working out how to be free because this is the time that they believe they know it all. But this period is when they need you the most because it is a crucial period for them. They need plenty of your time to teach them the right way to deal with problems or to get them up when they're down, just the same as when they were toddlers. I have two young teens, a girl, and a boy. So apart from praying for guidance, I always seek for better ways to improve my parenting skills and here are a few tips to keep in mind that has helped me so far on how to deal with adolescent child/children." },
      { type: 'h3', text: "Mindset Approach" },
      { type: 'p', text: "The way of dealing with adolescent child/children needs to change as children grows. Strategies that worked with small kids won't work with teenagers. Young adolescents need various standards from older adolescents. Your methodology needs to suit the kid's phase of improvement. As your child ages, your method of coping with your teenage child/children mustchange. Strategies that work for young children won't work for teens. Young teens require different expectations than older teenagers. Your approach needs to suit the stage of development for the kid. However, you most know that when you are still in charge, they will rely on as much as possible, on you.  " },
      { type: 'h3', text: 'Being dismissed or rejected' },
    { type: 'p', text: "Sometimes, parents of adolescents can feel dismissed, which can be particularly awful. You may feel ignored, humiliated, opposed, condemned, disrespected, or ridiculed. In some cases, you will always be their topic of gossip among themselves if your children are anything like mine. Responding in a helpful way appears to be challenging. To find the maturity of yourself, the safest methodology is to understand that this rejection is vital for their growing up because it helps them become more independent, and it’s ok to let some of it wash over you. In any situation, you have the right to be clear about how you need to be dealt with as a parent and what repercussions there are if this is not considered." },
    
    { type: 'h3', text: "Ensure there are boundaries" },
    { type: 'p', text: "For your teenager, strict boundaries are important. As a parent, there is always an opportunity to be adamant on what you will accept and what you won't. Many teens can complain and rebel somewhat, but they still need boundaries to be set and enforced by you so that they know that they are truly concentrated on and protected. Ensure that the boundaries are sensible. Choices, rather than your gain, should be in the best interest of your teenager. At a time when a warm and loving relationship can be preserved, needless constraints will cause turmoil. It may be a perfect chance for some potential options to be allowed." },
    { type: 'h3', text: "Advising your teenager" },
        { type: 'p', text: "As your child continues to grow, there will be constant need for advice. Your child will ask for advice now and then, and you should always be able and ready to answer. That’s why it’s very important to stay informed with happenings and current affairs. When your teenager opens to get advice from you, it means they look up to you and your opinions and guidance matters to them. Your perspective into the universe could be helpful. Nevertheless, it is necessary to display appreciation simultaneously. It is a preferred approach to propose things, and to encourage them to choose what to do, over directing/forcing them." },
    { type: 'h3', text: "Anger Management" },
        { type: 'p', text: "In adolescence, anger is a common emotion. It is common and powerful. The outrage against parents can be part of distancing themselves from you and strengthening their desire to be independent. Especially in single parents’ home. Nonetheless, becoming angry should not be an excuse for actions, such as aggression or brutality. As a parent you can help your teens manage their anger by using mental and emotional analysis which involves you asking them how they feel and why they feel the way they do. This method helps you detect the purpose of their anger and how you can help them manage the anger in ways to keep them calm, speak and cope well with anger." },



]
  },

];

function BlogDetail() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find the blog post by ID
  const blog = sampleBlogData.find(item => item.id === parseInt(id));

  const handleBackClick = () => {
    navigate(-1); // Go back to previous page
  };

  // If blog not found, show 404
  if (!blog) {
    return (
      <div className="min-h-screen bg-background">
        <Header 
          mobileMenuOpen={mobileMenuOpen} 
          setMobileMenuOpen={setMobileMenuOpen} 
        />
        <main className="overflow-x-hidden py-16 lg:py-24">
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Blog Not Found</h1>
            <p className="text-gray-600">The blog post you're looking for doesn't exist.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const renderContent = (content) => {
    return (
      <div className="space-y-3">
        {content.map((item, index) => {
          if (item.type === 'h3') {
            return <h3 key={index} className="text-xl font-semibold text-gray-800 mt-5 first:mt-0">{item.text}</h3>;
          } else if (item.type === 'p') {
            return <p key={index} className="text-base text-gray-700 leading-relaxed">{item.text}</p>;
          }
          return null;
        })}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background pt-[6.4rem] lg:pt-[9rem]">
      <Header 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
      />
      <main className="overflow-x-hidden">
        {/* Back Button */}
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <button
            onClick={handleBackClick}
            className="inline-flex items-center "
          >
            <img src={backs} className='h-[3rem] w-[5rem]' alt="" />
           
          </button>
        </div>

        {/* Hero Image with Title */}
        <div className="max-w-screen-2xl mx-auto px-4">
          <div className='w-full h-[400px] lg:h-[500px] rounded-2xl flex justify-start items-end relative z-30 overflow-hidden mx-auto px-4' style={{
            backgroundImage: `url(${blog.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}>
            
            {/* Gradient Overlay */}
            <div className='absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 z-10'></div>
            
            <div className='max-w-4xl p-5 lg:p-10 relative z-20'>
              <h2 className='text-[18px] md:text-[21px] lg:text-[43px] font-normal font-georgia text-white'>{blog.title}</h2>
            </div>
          </div>
        </div>

        {/* Blog Content */}
        <div className="py-16 lg:py-24">
          <div className="max-w-screen-2xl mx-auto px-4">
            {renderContent(blog.content)}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default BlogDetail;