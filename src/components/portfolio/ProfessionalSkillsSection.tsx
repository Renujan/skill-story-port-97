import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Brain, Users, Target, BookOpen, User, MessageSquare, ChevronRight, 
  FileText, UserCheck, Users2, Mail, Phone, Award, Lightbulb, 
  Star, TrendingUp 
} from "lucide-react";

const ProfessionalSkillsSection = () => {
  const sessionData = [
    {
      id: "session1",
      title: "Professional Skills Development",
      icon: <Brain className="w-6 h-6" />,
      keySkills: [
        "Communication", "Problem-solving", "Teamwork", 
        "Adaptability", "Time management", "Leadership"
      ],
      concepts: [
        "What Are Professional Skills: Also called soft skills or employability skills",
        "Non-technical abilities that help you succeed in the workplace",
        "Transferable – useful in any job or industry",
        "Values: Honesty, respect, responsibility, courage",
        "Beliefs: Confidence, growth mindset, optimism", 
        "Attitudes: Positive thinking, open-mindedness, empathy",
        "Character: Trustworthy, responsible, caring, fair"
      ],
      additionalInfo: [
        "Self-Awareness: What you know about yourself",
        "What others know about you",
        "What you've discovered about yourself through feedback",
        "Tips: Practice skills in real tasks, ask for feedback, take on new challenges"
      ],
      reflection: "In this session, I learned that professional skills go beyond technical knowledge and play a key role in employability and career success. The discussion on values, beliefs, attitudes, and character helped me reflect on how my personal qualities influence the way I work with others. The Johari Window exercise made me realize the importance of self-awareness and feedback in building better workplace relationships. I also understood that adaptability, teamwork, and communication are essential to handle real workplace challenges effectively. This lesson encouraged me to think about my own strengths and areas for improvement. I feel motivated to practice communication, time management, and problem-solving in my daily life so that I can be better prepared for future professional situations."
    },
    {
      id: "session2", 
      title: "Portfolio Development",
      icon: <BookOpen className="w-6 h-6" />,
      keySkills: [
        "Self-Assessment", "Professional Branding", "Documentation",
        "Content Curation", "Digital Presentation", "Reflection"
      ],
      concepts: [
        "P.E.A.K.S Model: Personal Characteristics, Experience, Accomplishments, Knowledge, Skills",
        "Career Portfolio: Comprehensive collection for job opportunities",
        "Assessment Portfolio: Reflective collection showing learning progress",
        "Master Portfolio: Complete archive of achievements",
        "Targeted Portfolio: Tailored for specific opportunities",
        "Essential Documents: Resume/CV, Academic Transcripts, Certifications",
        "Online Platforms: LinkedIn, Behance, GitHub Pages, Wix/Squarespace"
      ],
      additionalInfo: [
        "Content includes: Work Samples, Project Reports, Writing Samples",
        "Evidence of Achievement: Awards, Letters of Recommendation",
        "Personal Context: Reflective statements explaining significance",
        "Organization: Clear layout with Table of Contents"
      ],
      reflection: "Compiling this portfolio has been an immensely valuable exercise in self-assessment and professional branding. It moved me from simply listing my experiences to critically evaluating them. The process of selecting key pieces of work forced me to identify my core strengths and the specific P.E.A.K.S. (Personal Characteristics, Experience, Accomplishments, Knowledge, and Skills) I bring to the table. More importantly, writing reflective statements provided context to my achievements, allowing me to articulate not just what I did, but how I did it, why it mattered, and what I learned. This portfolio is not a static document but a dynamic representation of my journey. It highlights my growth, my readiness for new challenges, and my commitment to continuous learning and improvement. I plan to keep this portfolio updated, treating it as a living document that evolves with my career. It will serve as a central tool for tracking my progress, preparing for interviews, and strategically planning my future professional development."
    },
    {
      id: "session3",
      title: "Writing Project Proposals",
      icon: <FileText className="w-6 h-6" />,
      keySkills: [
        "Strategic Writing", "Problem Analysis", "Solution Design",
        "Persuasive Communication", "Project Planning", "Budget Management"
      ],
      concepts: [
        "What is a Project Proposal: Document to convince someone to accept your idea",
        "External Proposal: Bids for contracts, funding, or partnerships",
        "Internal Proposal: Used within organization for changes or new projects",
        "Executive Summary: Briefly convince the reader that your team is the right choice",
        "Management Section: Team skills, training plans, and timeline",
        "Financial Section: Detailed cost breakdown of the project"
      ],
      additionalInfo: [
        "Planning: Know your audience, use visuals where helpful",
        "Writing Structure: What is the problem? What is the solution?",
        "Key Questions: Can it be done? Should it be done?",
        "Always be clear and persuasive, organize content logically"
      ],
      reflection: "This module deepened my understanding of how project proposals function as strategic tools for problem-solving and securing opportunities. The structured approach—especially the Executive Summary, Management, and Financial sections—taught me how to present ideas persuasively while addressing stakeholder concerns. Learning to frame problems clearly and present realistic solutions has improved my ability to communicate complex ideas effectively."
    },
    {
      id: "session4",
      title: "CV Writing",
      icon: <User className="w-6 h-6" />,
      keySkills: [
        "Tailoring Content", "ATS Optimization", "Professional Presentation",
        "Achievement Quantification", "Strategic Branding", "Error-free Writing"
      ],
      concepts: [
        "Purpose: Comprehensive marketing document to secure interviews",
        "Key Principle: Tailoring is non-negotiable - customize for each job",
        "ATS Optimization: Use keywords from job descriptions",
        "Personal Information: Professional contact details and location",
        "Professional Summary: 3-4 line powerful statement tailored to the job",
        "Work Experience: Reverse chronological order with quantified achievements",
        "Education: Degree, institution, year with relevant coursework"
      ],
      additionalInfo: [
        "Skills: Categorized hard and soft skills with honest proficiency levels",
        "Common Mistakes: Spelling errors, irrelevant information, vague accomplishments",
        "Use action verbs and quantify results (e.g., 'Increased sales by 15%')",
        "Consistent formatting and professional presentation"
      ],
      reflection: "The process of crafting and refining my CV has been an exercise in strategic personal branding. It moved me from simply listing my past duties to actively marketing my measurable achievements and value proposition. The most critical lesson was the importance of tailoring; a CV is not a static document but a dynamic one that must speak directly to the needs of each specific employer and role. By focusing on quantifiable results and using keywords from job descriptions, I have learned to create a document that is not only visually appealing and easy to navigate but also optimized to pass through both automated systems and human reviewers."
    },
    {
      id: "session5",
      title: "Job Interviews",
      icon: <UserCheck className="w-6 h-6" />,
      keySkills: [
        "STAR Method", "Non-verbal Communication", "Active Listening",
        "Research Skills", "Question Formulation", "Professional Presentation"
      ],
      concepts: [
        "Core Purpose: Two-way conversation to exchange information",
        "Body Language (55%): Positive posture, eye contact, confident gestures",
        "Tone of Voice (38%): Enthusiastic, confident, and positive delivery",
        "Words (7%): Careful word choice with evidence-based answers",
        "6 C's: Clear, Concise, Correct, Complete, Concrete, Courteous, Confident",
        "STAR Method: Structure answers with Situation, Task, Action, Result"
      ],
      additionalInfo: [
        "Preparation Strategy: Identify 3 key strengths to highlight",
        "Research: Use company name and industry-specific jargon",
        "Active Listening: Pay attention, show you're listening, seek clarification",
        "Practical Tips: Dress professionally, arrive early, bring copies of CV"
      ],
      reflection: "Preparing for this session reframed my understanding of a job interview from a test to be passed to a strategic conversation with a shared goal. The most critical insight was the overwhelming importance of non-verbal communication; it's not just what you say, but how you say it and how you present yourself that builds a connection with the interviewer. I now understand that success hinges on meticulous preparation: researching the company, tailoring my examples using the STAR method, and formulating thoughtful questions. The key is to shift from passively answering questions to actively providing evidence of my skills and confidently assessing if the role is right for me."
    },
    {
      id: "session6",
      title: "Meetings and Speaking Skills",
      icon: <Users2 className="w-6 h-6" />,
      keySkills: [
        "Meeting Facilitation", "Active Participation", "Time Management",
        "Agenda Planning", "Minute Taking", "Conflict Resolution"
      ],
      concepts: [
        "Key Terminology: Agenda (list of topics), Minutes (official record)",
        "Formal Meetings: Follow strict rules and procedures (AGMs)",
        "Informal Meetings: Relaxed discussion and brainstorming sessions",
        "Decision-Making Meetings: Aim to reach conclusions or make choices",
        "Key Roles: Chairperson, Secretary/Scribe, Timekeeper, Participants",
        "Planning Checklist: Purpose, participants, logistics, preparation"
      ],
      additionalInfo: [
        "Useful Language: 'In my view...', 'Could you elaborate on...?'",
        "Contributing Effectively: State opinions, ask for clarification",
        "Overcoming Challenges: Managing dominating participants, staying on topic",
        "Essential: Define clear purpose and desired outcome beforehand"
      ],
      reflection: "This session transformed my view of meetings from passive events to structured, goal-oriented conversations. The key takeaway is that a successful meeting is 90% preparation. Defining a clear purpose, desired outcome, and agenda beforehand is non-negotiable for productivity. I learned that confident participation isn't about talking the most, but about contributing meaningfully using the right language to state opinions, agree, disagree, and clarify. Understanding the different roles, especially the facilitator's responsibility to manage time and participation, highlights that effective meetings require shared effort and discipline."
    },
    {
      id: "session7",
      title: "Professional Email Writing",
      icon: <Mail className="w-6 h-6" />,
      keySkills: [
        "Professional Tone", "Clear Structure", "Concise Writing",
        "Etiquette Rules", "Proofreading", "Audience Awareness"
      ],
      concepts: [
        "Core Principles: Professional address based on your name",
        "Clear Subject Line: Specific summary of email purpose",
        "Proper Structure: To, Subject, Greeting, Body, Closing, Signature",
        "Formal Tone: Polite language with proper requests",
        "Key Etiquette: Be concise, proofread, mind your tone",
        "Before Send Checklist: Subject clarity, recipient name, tone, proofreading"
      ],
      additionalInfo: [
        "Professional Address: firstname.lastname@email.com format",
        "Greeting: Use Dear [Title] [Last Name] for formal emails",
        "Body: Get straight to the point, use proper grammar",
        "Closing: Best, Sincerely, or Kind regards with full name"
      ],
      reflection: "Mastering professional email communication is a critical skill that extends far beyond simply sending a message. This process taught me that every element—from the email address itself to the subject line, tone, and structure—communicates professionalism, attention to detail, and respect for the recipient. The most valuable lesson was the importance of audience awareness. An email to a professor, a potential employer, or a client requires a level of formality and precision that is different from casual communication. Learning to frame requests politely, provide clear context, and proofread meticulously are small habits that create a significantly more professional and competent impression."
    },
    {
      id: "session8",
      title: "Telephone Etiquette",
      icon: <Phone className="w-6 h-6" />,
      keySkills: [
        "Professional Greeting", "Call Handling", "Message Taking",
        "Call Transferring", "Conflict Resolution", "Voice Modulation"
      ],
      concepts: [
        "Core Principles: You represent your organization with every call",
        "Promptness: Answer within 2-3 rings with proper identification",
        "The 'Smile' in Voice: Tone conveys attitude and professionalism",
        "Hold Etiquette: Ask permission, check back every 30-45 seconds",
        "Transferring Calls: Explain why, get permission, warm transfer when possible",
        "Taking Messages: Be accurate with name, number, company, date, time"
      ],
      additionalInfo: [
        "Proper Greeting: 'Thank you for calling [Department], this is [Name]'",
        "Difficult Situations: Listen without interrupting, express empathy",
        "Professional Language: Use 'Please', 'Thank you', avoid slang",
        "Close professionally and let caller hang up first"
      ],
      reflection: "This training underscored that the telephone is not just a tool, but a critical point of human connection that shapes perceptions of an entire organization. The most significant lesson is the profound impact of tone of voice and professional language in building rapport and trust without the benefit of visual cues. Mastering telephone etiquette is about more than memorizing rules; it's about cultivating a mindset of service, empathy, and responsibility. Whether answering a call, placing someone on hold, or handling a complaint, each action reflects a choice to be helpful and respectful. This skill is fundamental to providing exceptional customer service and fostering positive professional relationships."
    },
    {
      id: "session9",
      title: "Emotional Intelligence",
      icon: <Brain className="w-6 h-6" />,
      keySkills: [
        "Self-Awareness", "Self-Management", "Social Awareness", 
        "Relationship Management", "Empathy", "Emotional Regulation"
      ],
      concepts: [
        "What is EQ: The ability to recognize, understand, and manage emotions in oneself and others",
        "EQ vs IQ: EQ can be developed over time, while IQ is mostly fixed",
        "Components: Subjective Experience, Physiological Response, Behavioral Response",
        "Functions: Help us survive, aid social interactions, motivate actions, communicate",
        "Types: Hardwired emotions (fear, joy, anger) vs Learned emotions (empathy, gratitude)",
        "Brain Structure: Amygdala (emotional center), Prefrontal Cortex (decision-making)",
        "Skills: Self-awareness, Self-management, Social awareness, Relationship management"
      ],
      additionalInfo: [
        "Why EQ Matters at Work: Builds better teams, enhances leadership, improves collaboration",
        "Warning Signs of Low EQ: Mood swings, poor social skills, inability to handle criticism",
        "Tips to Improve: Practice mindfulness, understand triggers, manage stress effectively",
        "Personal Growth: Keep emotion journal, practice active listening, seek feedback"
      ],
      reflection: "Learning about Emotional Intelligence has been transformative in understanding that technical skills alone aren't enough for professional success. The realization that EQ can be developed throughout life, unlike IQ, gives me hope and motivation to continuously work on these skills. Understanding the difference between hardwired and learned emotions helped me recognize that empathy, patience, and emotional regulation are skills I can actively develop. The brain science behind emotions - particularly how the prefrontal cortex doesn't fully mature until age 25 - explains why emotional control can be challenging and why practice is so important. The four key components (self-awareness, self-management, social awareness, and relationship management) provide a clear framework for personal development. I now understand why employers value EQ so highly - it's essential for teamwork, leadership, and creating positive work environments. Moving forward, I plan to practice mindfulness daily, keep an emotion journal, and actively seek feedback to continue developing my emotional intelligence alongside my technical abilities."
    }
  ];

  const getGradientClass = (index: number) => {
    const gradients = [
      'bg-gradient-session-1',
      'bg-gradient-session-2', 
      'bg-gradient-session-3',
      'bg-gradient-session-4',
      'bg-gradient-session-5',
      'bg-gradient-session-6',
      'bg-gradient-session-7',
      'bg-gradient-session-8',
      'bg-gradient-session-1'
    ];
    return gradients[index] || 'bg-gradient-primary';
  };

  return (
    <section id="skills" className="py-12 md:py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      {/* Enhanced Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-xl animate-float" style={{animationDelay: "2s"}}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-float" style={{animationDelay: "4s"}}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="w-8 h-8 text-primary animate-pulse-glow" />
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Professional Skills Journey
            </h2>
            <Star className="w-8 h-8 text-primary animate-pulse-glow" />
          </div>
          <p className="text-base md:text-lg text-foreground/80 max-w-2xl mx-auto font-medium">
            A comprehensive exploration through 9 professional development sessions, 
            showcasing growth in essential workplace skills and career readiness
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <TrendingUp className="w-5 h-5 text-primary" />
            <span className="text-sm text-foreground/70 font-medium">9 Sessions • Comprehensive Learning • Professional Growth</span>
          </div>
        </div>
        
        {/* Interactive Session Cards */}
        <Accordion type="single" collapsible className="w-full max-w-6xl mx-auto space-y-6">
          {sessionData.map((session, index) => (
            <AccordionItem key={session.id} value={session.id} className="border-0">
              <Card className={`transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] ${getGradientClass(index)} text-white border-0 shadow-elegant overflow-hidden animate-fade-in group relative`} 
                    style={{animationDelay: `${index * 0.1}s`}}>
                <AccordionTrigger className="hover:no-underline p-0 [&[data-state=open]>div>svg]:rotate-90">
                  <CardContent className="p-6 md:p-8 w-full">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-4 md:gap-6">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center group-hover:animate-wiggle backdrop-blur-sm">
                          {session.icon}
                        </div>
                        <div className="text-left">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl md:text-2xl font-bold">Session {index + 1}</h3>
                            <Badge variant="outline" className="text-xs bg-white/20 border-white/30 text-white">
                              Module {index + 1}
                            </Badge>
                          </div>
                          <p className="text-white/90 font-medium">{session.title}</p>
                          <p className="text-sm text-white/70 mt-2 max-w-md">
                            {index === 0 && 'Foundation of professional skills, values, and self-awareness development'}
                            {index === 1 && 'Strategic portfolio creation using P.E.A.K.S model and professional branding'}
                            {index === 2 && 'Strategic writing, problem analysis, and persuasive proposal communication'}
                            {index === 3 && 'Professional branding, content tailoring, and ATS optimization strategies'}
                            {index === 4 && 'STAR method, non-verbal communication, and comprehensive interview preparation'}
                            {index === 5 && 'Meeting facilitation, active participation, and professional speaking excellence'}
                            {index === 6 && 'Professional tone, email structure, and audience-aware communication mastery'}
                            {index === 7 && 'Phone etiquette, call handling, and professional voice communication skills'}
                            {index === 8 && 'Emotional intelligence, self-awareness, empathy, and relationship management skills'}
                          </p>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 animate-pulse-glow" />
                    </div>
                  </CardContent>
                </AccordionTrigger>
                
                <AccordionContent className="pb-0">
                  <div className="px-6 md:px-8 pb-6 md:pb-8 space-y-6">
                    <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
                      {/* Key Skills & Concepts */}
                      <div className="space-y-6">
                        <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 animate-scale-in">
                          <CardHeader className="pb-3">
                            <CardTitle className="flex items-center gap-3 text-white text-lg">
                              <Target className="w-5 h-5 animate-pulse" />
                              Key Skills Developed
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="flex flex-wrap gap-2">
                              {session.keySkills.map((skill, skillIndex) => (
                                <Badge key={skillIndex} variant="outline" 
                                       className="text-white border-white/30 bg-white/10 hover:bg-white/20 transition-all duration-200 animate-fade-in-left"
                                       style={{animationDelay: `${skillIndex * 0.1}s`}}>
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                        
                        <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 animate-scale-in" style={{animationDelay: "0.2s"}}>
                          <CardHeader className="pb-3">
                            <CardTitle className="flex items-center gap-3 text-white text-lg">
                              <Lightbulb className="w-5 h-5 animate-pulse" />
                              Key Concepts & Framework
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-2">
                              {session.concepts.map((concept, conceptIndex) => (
                                <li key={conceptIndex} className="text-white/85 flex items-start gap-2 text-sm animate-fade-in-right" 
                                    style={{animationDelay: `${conceptIndex * 0.05}s`}}>
                                  <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0"></span>
                                  <span>{concept}</span>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>

                        {session.additionalInfo && (
                          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 animate-scale-in" style={{animationDelay: "0.4s"}}>
                            <CardHeader className="pb-3">
                              <CardTitle className="flex items-center gap-3 text-white text-lg">
                                <Brain className="w-5 h-5 animate-pulse" />
                                Additional Insights
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <ul className="space-y-2">
                                {session.additionalInfo.map((info, infoIndex) => (
                                  <li key={infoIndex} className="text-white/85 flex items-start gap-2 text-sm animate-fade-in-left" 
                                      style={{animationDelay: `${infoIndex * 0.05}s`}}>
                                    <span className="w-1.5 h-1.5 rounded-full bg-white/70 mt-2 flex-shrink-0"></span>
                                    <span>{info}</span>
                                  </li>
                                ))}
                              </ul>
                            </CardContent>
                          </Card>
                        )}
                      </div>
                      
                      {/* Reflection */}
                      <div className="space-y-6">
                        <Card className="bg-white/10 backdrop-blur-sm border-white/20 h-full hover:bg-white/15 transition-all duration-300 animate-scale-in" style={{animationDelay: "0.3s"}}>
                          <CardHeader className="pb-3">
                            <CardTitle className="flex items-center gap-3 text-white text-lg">
                              <MessageSquare className="w-5 h-5 animate-pulse" />
                              Personal Reflection & Growth
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="prose prose-sm max-w-none">
                              <p className="text-white/85 leading-relaxed text-sm first-letter:text-2xl first-letter:font-bold first-letter:text-white">
                                {session.reflection}
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </Card>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Summary Stats */}
        <div className="mt-16 text-center animate-fade-in" style={{animationDelay: "0.8s"}}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="bg-gradient-card p-4 rounded-lg shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <div className="text-2xl font-bold text-primary">9</div>
              <div className="text-sm text-muted-foreground">Sessions</div>
            </div>
            <div className="bg-gradient-card p-4 rounded-lg shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <div className="text-2xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Skills</div>
            </div>
            <div className="bg-gradient-card p-4 rounded-lg shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <div className="text-2xl font-bold text-primary">100+</div>
              <div className="text-sm text-muted-foreground">Concepts</div>
            </div>
            <div className="bg-gradient-card p-4 rounded-lg shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <div className="text-2xl font-bold text-primary">∞</div>
              <div className="text-sm text-muted-foreground">Growth</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSkillsSection;