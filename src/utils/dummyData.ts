export interface JournalEntry {
  id: string;
  date: Date;
  content: string;
  reflection: string;
  emotions: {
    happy: number;
    calm: number;
    anxious: number;
    sad: number;
  };
}

export const dummyJournalEntries: JournalEntry[] = [
  {
    id: '1',
    date: new Date(2023, 7, 1), // August 1st
    content: "Today was a productive day at work. I managed to finish the project ahead of schedule, which made me feel accomplished. Had a nice evening walk which helped clear my mind.",
    reflection: "I notice you experienced a sense of accomplishment today. Completing tasks seems to be a source of positive emotions for you. The evening walk suggests you value moments of calm and reflection.",
    emotions: { happy: 7, calm: 8, anxious: 2, sad: 1 }
  },
  {
    id: '2',
    date: new Date(2023, 7, 2), // August 2nd
    content: "Feeling a bit anxious about the presentation tomorrow. I've prepared well, but public speaking always makes me nervous. Did some breathing exercises that helped a bit.",
    reflection: "Your anxiety about public speaking is common. It's positive that you recognize this pattern and are using breathing techniques to manage it. Consider celebrating your preparation as a success regardless of the outcome.",
    emotions: { happy: 4, calm: 3, anxious: 7, sad: 2 }
  },
  {
    id: '3',
    date: new Date(2023, 7, 3), // August 3rd
    content: "The presentation went better than expected! My boss gave me positive feedback and the team seemed engaged. I'm relieved it's over and proud of myself for pushing through the anxiety.",
    reflection: "This is a great example of how our anticipatory anxiety often exceeds the actual experience. You showed resilience by doing it despite your fears, and were rewarded with success. This is a pattern worth noting for future anxious moments.",
    emotions: { happy: 8, calm: 6, anxious: 3, sad: 1 }
  },
  {
    id: '4',
    date: new Date(2023, 7, 4), // August 4th
    content: "Had a disagreement with my partner today about household chores. I felt unappreciated and got defensive. We resolved it eventually, but I still feel a bit down about how I reacted.",
    reflection: "Relationship conflicts often trigger strong emotions. I notice your self-awareness about your reaction, which is an important part of emotional intelligence. Consider what specific needs weren't being met that led to feeling unappreciated.",
    emotions: { happy: 3, calm: 4, anxious: 5, sad: 6 }
  },
  {
    id: '5',
    date: new Date(2023, 7, 5), // August 5th
    content: "Friday at last! Had a fun team lunch and then wrapped up some loose ends before the weekend. Looking forward to sleeping in tomorrow and maybe hiking if the weather is good.",
    reflection: "I notice anticipation of rest and activities you enjoy brings positive emotions. Your entry shows how social connections at work and anticipated leisure time both contribute to your wellbeing.",
    emotions: { happy: 8, calm: 7, anxious: 2, sad: 1 }
  },
  {
    id: '6',
    date: new Date(2023, 7, 6), // August 6th
    content: "Wonderful day hiking with friends. The trail was challenging but the views were worth it. Feeling physically tired but mentally refreshed. Nature always recharges me.",
    reflection: "Physical activity in nature appears to be a reliable source of positive emotions for you. The balance of physical challenge and mental rejuvenation is worth noting as a key component of your wellbeing routine.",
    emotions: { happy: 9, calm: 8, anxious: 1, sad: 0 }
  },
  {
    id: '7',
    date: new Date(2023, 7, 7), // August 7th
    content: "Spent the day reading and meal prepping for the week. A bit anxious about some deadlines coming up, but trying to focus on being prepared rather than worried. Called mom which was nice.",
    reflection: "I notice you're developing awareness of your anxiety patterns and actively trying to reframe your thinking. Social connection with family appears as a positive element. Your self-care through preparation shows healthy coping strategies.",
    emotions: { happy: 6, calm: 5, anxious: 4, sad: 2 }
  }
];

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: Date;
}

export const dummyChatHistory: ChatMessage[] = [
  {
    id: '1',
    sender: 'ai',
    text: "Hello! I'm your AI reflection assistant. How are you feeling today?",
    timestamp: new Date(2023, 7, 7, 9, 30)
  },
  {
    id: '2',
    sender: 'user',
    text: "I'm feeling a bit overwhelmed with work today. There's so much to do and I don't know where to start.",
    timestamp: new Date(2023, 7, 7, 9, 32)
  },
  {
    id: '3',
    sender: 'ai',
    text: "It sounds like you're experiencing some stress due to a high workload. When we feel overwhelmed, it can be helpful to break things down into smaller, manageable tasks. Have you tried making a list of everything you need to do and prioritizing them?",
    timestamp: new Date(2023, 7, 7, 9, 33)
  },
  {
    id: '4',
    sender: 'user',
    text: "That's a good idea. I think part of my stress is that I'm afraid I'll miss something important.",
    timestamp: new Date(2023, 7, 7, 9, 35)
  },
  {
    id: '5',
    sender: 'ai',
    text: "That fear of missing something important is common and understandable. It relates to what psychologists call 'cognitive load' - when our minds are trying to hold onto too many things at once. Writing everything down can help reduce this load. Would it help to talk through some of your most pressing tasks?",
    timestamp: new Date(2023, 7, 7, 9, 37)
  },
  {
    id: '6',
    sender: 'user',
    text: "I have a presentation due tomorrow, three emails I need to respond to, and a report that's due by the end of the week.",
    timestamp: new Date(2023, 7, 7, 9, 39)
  },
  {
    id: '7',
    sender: 'ai',
    text: "Thanks for sharing that. Based on deadlines, it sounds like the presentation might be your highest priority, followed by the emails, and then the report. How do you feel about focusing on just the presentation for now? Sometimes giving ourselves permission to focus on one task can reduce that overwhelming feeling.",
    timestamp: new Date(2023, 7, 7, 9, 41)
  }
];