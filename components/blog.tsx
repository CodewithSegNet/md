import { useNavigate } from 'react-router-dom';
import { useScrollAnimation } from '../utils/animation';
import desktop from '../assets/image11.jpg'
import arr from '../assets/arrow.svg'
import arr2 from '../assets/arrow2.png'
import desktop2 from '../assets/image12.jpg'
import desktop3 from '../assets/image13.jpg'
import desktop4 from '../assets/image191.jpg'
import desktop5 from '../assets/image181.jpg'
import desktop6 from '../assets/image171.jpg'
import desktop7 from '../assets/image161.jpg'
import desktop8 from '../assets/image151.jpg'
import desktop9 from '../assets/image141.jpg'



// Sample blog data
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

const Blog = ({ blogItems = sampleBlogData }) => {
  const navigate = useNavigate();

  const handleBlogClick = (blogId) => {
    // Navigate to individual blog page
    navigate(`/blog/${blogId}`);
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-[4rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogItems.map((blog) => (
            <div key={blog.id}>
              {/* Blog Card */}
              <div className='max-w-[488px] h-[450px] lg:h-[611px] rounded-2xl flex justify-start items-end relative z-30 overflow-hidden' style={{
                backgroundImage: `url(${blog.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}>
                
                {/* Gradient Overlay */}
                <div className='absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 z-10'></div>
                
                <div className='w-[230px] lg:w-[392px] p-5 lg:p-10 relative z-20'>
                  <h2 className='text-[18px] md:text-[21px] lg:text-[43px] font-normal font-georgia text-white'>{blog.title}</h2>
                </div>
                <button 
                  onClick={() => handleBlogClick(blog.id)}
                  className='bg-[rgba(203,8,240,0.6)] hover:bg-white transition-all duration-200 rounded-full w-[200px] h-[200px] absolute top-[361px] left-[256px] lg:top-[531px] lg:left-[356px] z-30 group'
                >
                    <div className='relative'>
                      <img src={arr} className="h-8 w-8 absolute top-[-60px] left-[44px] transition-opacity duration-200 group-hover:opacity-0" alt="" />
                      
                      <img src={arr2} className="h-8 w-8 absolute top-[-60px] left-[44px] transition-opacity duration-200 opacity-0 group-hover:opacity-100" alt="" />
                    </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;