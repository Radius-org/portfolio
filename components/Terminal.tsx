"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import type { TerminalLine } from "../types/portfolio"
import { TerminalHeader } from "./TerminalHeader"
import { TypingText } from "./TypingText"
import { portfolioConfig } from "../config/portfolio-config"

const commands = {
  help: `🚀 Available commands:
  help        - Show this help message
  about       - Learn about me
  projects    - View my projects
  skills      - See my technical skills
  experience  - View my work experience
  contact     - Get my contact information
  education   - See my educational background
  theme       - Toggle terminal theme
  sudo        - Try it and see ;)
  clear       - Clear the terminal
  
💡 Pro tip: Use tab for auto-completion!`,

  about: `👋 Hi! I'm ${portfolioConfig.name}, a passionate ${portfolioConfig.title}.

🎯 Currently working at ${portfolioConfig.company}
📍 Based in ${portfolioConfig.location}
💼 ${portfolioConfig.experience} of experience in product management and growth

I specialize in building data-driven products that drive user growth and 
engagement. With expertise in product strategy, growth hacking, and team 
leadership, I help companies scale their products from 0 to 1 and beyond.

When I'm not analyzing user metrics, you can find me exploring new 
growth frameworks, mentoring product teams, or building side projects 
that solve real problems.

🚀 Current focus: ${portfolioConfig.currentProject}`,

  projects: `🚀 Featured Projects:

1. 🖥️  AI-Powered Growth Analytics Platform
   • Real-time user behavior analytics with ML insights
   • Built with React, Python, TensorFlow, and PostgreSQL
   • Increased user retention by 40% across client portfolio
`,

  skills: `💻 Product & Growth Skills:

🎯 Product Management:
  • Product Strategy & Roadmapping
  • User Research & Analytics
  • Product-Market Fit Analysis 

👥 Leadership & Strategy:
  • Team Leadership & Mentoring
  • Cross-functional Collaboration
  • Agile/Scrum Methodologies
  • Strategic Planning & OKRs 

🛠️  Technical Skills:
  • HTML, CSS, JavaScript
  • React, Nextjs
  • APIs & Integrations
  • No-code/Low-code Tools`,

  experience: `💼 Professional Experience:

🏢 Product Lead | ${portfolioConfig.company}
📅 2024 - Present | ${portfolioConfig.location}
• Led product strategy for B2B SaaS platform serving 10k+ businesses
• Increased user activation rate by 45% through data-driven optimization
• Built and managed cross-functional team of 12 engineers and designers
• Implemented growth loops that drove 3x organic user acquisition
• Technologies: React, Python, PostgreSQL, Mixpanel, Figma

🏢 Web Developer | ${portfolioConfig.company}
📅 2022 - 2024 | ${portfolioConfig.location}
• Developed and launched 5+ web applications using React and Nextjs
• Improved site performance by 60% through code optimization and caching
• Collaborated with designers to create user-friendly interfaces
• Technologies: React, Next.js, Vercel
`,

  contact: `📧 Let's Connect!

📬 Email: ${portfolioConfig.email}
🔗 LinkedIn: linkedin.com/in/${portfolioConfig.linkedin}
🐙 GitHub: github.com/${portfolioConfig.github}

📍 Location: ${portfolioConfig.location}
🌍 Timezone: IST (UTC+5:30)
💬 Languages: English , Hindi , Bengali 

🤝 I'm always interested in:
• Product leadership opportunities
• Growth strategy consulting
• Collaborative growth experiments

📅 Response time: Usually within 12 hours
🎯 Best way to reach me: Email or LinkedIn

Feel free to reach out for product discussions, growth opportunities, 
or just to chat about building amazing products! 🚀`,

  education: `🎓 Education & Learning:

🏛️  Master In Computer Application (MCA)
Central Sikkim University, Gangtok | 2019-2022
• Specialization: Web Technologies and Product Management
• CGPA: 8.9/10.0 
• Relevant Coursework: Python, React, Node.js, Product Analytics

🏛️  Bachelor In Computer Application (BCA)
Techno India Salt Lake, Kolkata | 2016-2019
• CGPA: 7.3/10.0
• Relevant Coursework: Data Structures, Algorithms, Web Development`,


  theme: `🎨 Terminal Theme Options:

Current theme: Matrix Green
Available themes:
• matrix (default) - Classic green on black
• cyberpunk - Neon blue and purple
• retro - Amber on dark brown
• hacker - Bright green with effects
• minimal - Clean black and white

To change theme, type: theme [name]
Example: theme cyberpunk

🎨 Coming soon:
• Custom color picker
• Theme persistence
• Animation effects
• Sound themes`,

  sudo: `🔐 Access Denied!

    ⚠️  WARNING: Unauthorized access attempt detected!
    
    Nice try! But you don't have sudo privileges here 😄
    This isn't a real terminal, but I appreciate the curiosity!
    
    🤖 Fun fact: In a real system, this would ask for a password.
    But since this is my portfolio, I'm the only admin here! 👨‍💻
    
    🎯 Easter Egg Unlocked! 🎯
    You found one of the hidden commands. There are more...
    
    Try typing 'konami' or 'matrix' for more surprises!
    
    💡 Pro tip: Try 'help' to see what you CAN do!`,

  clear: "CLEAR_COMMAND",
}

export function Terminal() {
  const [history, setHistory] = useState<TerminalLine[]>([
    {
      type: "system",
      content: `Welcome to ${portfolioConfig.name}'s Interactive Portfolio Terminal v2.0`,
      timestamp: new Date(),
    },
    {
      type: "input",
      content: "aniruddha@portfolio:~$ welcome",
    },
  ])
  const [currentInput, setCurrentInput] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [typingQueue, setTypingQueue] = useState<string[]>([])
  const terminalRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const welcomeMessage = `Hi, I'm ${portfolioConfig.name}, a ${portfolioConfig.title} & Growth Expert.

Welcome to my interactive 'AI powered' portfolio terminal! 
Type 'help' to see available commands or just start exploring.

💡 Pro tip: This terminal supports tab completion and command history!`

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history, typingQueue])

  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus()
      }
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  const handleWelcomeComplete = () => {
    setIsTyping(false)
  }

  const handleTypingComplete = () => {
    if (typingQueue.length > 0) {
      const [nextText, ...remainingQueue] = typingQueue
      setTypingQueue(remainingQueue)

      // Add the completed text to history
      setHistory((prev) => [
        ...prev,
        {
          type: "output",
          content: nextText,
          timestamp: new Date(),
        },
      ])
    }
  }

  const handleCommand = (command: string) => {
    const cmd = command.toLowerCase().trim()

    if (cmd === "clear") {
      setHistory([])
      setTypingQueue([])
      return
    }

    const newHistory: TerminalLine[] = [
      ...history,
      {
        type: "input" as const,
        content: `aniruddha@portfolio:~$ ${command}`,
        timestamp: new Date(),
      },
    ]

    if (commands[cmd as keyof typeof commands]) {
      const output = commands[cmd as keyof typeof commands]
      if (output !== "CLEAR_COMMAND") {
        setHistory(newHistory)
        setTypingQueue([output])
      }
    } else if (cmd === "") {
      // Do nothing for empty command
    } else {
      const errorMessage = `Command not found: ${command}\nType 'help' to see available commands.\n\n💡 Did you mean one of these?\n${Object.keys(
        commands,
      )
        .filter((c) => c.includes(cmd.charAt(0)))
        .slice(0, 3)
        .join(", ")}`

      setHistory(newHistory)
      setTypingQueue([errorMessage])
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleCommand(currentInput)
      setCurrentInput("")
    }
  }

  const handleTerminalClick = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <div className="flex flex-col h-full bg-black border-l border-green-500/30 md:border-l-2 overflow-hidden">
      <TerminalHeader />

      <div
        ref={terminalRef}
        className="flex-1 overflow-y-auto p-2 md:p-4 font-mono text-green-400 cursor-text text-sm md:text-base"
        onClick={handleTerminalClick}
      >
        <div className="space-y-1 md:space-y-2">
          {history.map((line, index) => (
            <div key={index}>
              {line.type === "input" ? (
                <div className="text-green-400 break-all">{line.content}</div>
              ) : line.type === "system" ? (
                <div className="text-cyan-400 font-bold break-words">{line.content}</div>
              ) : (
                <div className="text-green-300 whitespace-pre-line pl-2 md:pl-4 break-words">{line.content}</div>
              )}
            </div>
          ))}

          {/* Welcome message with typing effect */}
          {history.length === 2 && isTyping && (
            <div className="text-green-300 whitespace-pre-line pl-2 md:pl-4 break-words">
              <TypingText text={welcomeMessage} speed={30} onComplete={handleWelcomeComplete} />
            </div>
          )}

          {/* Typing queue */}
          {typingQueue.length > 0 && (
            <div className="text-green-300 whitespace-pre-line pl-2 md:pl-4 break-words">
              <TypingText text={typingQueue[0]} speed={20} onComplete={handleTypingComplete} />
            </div>
          )}

          {/* Current Input Line */}
          {!isTyping && typingQueue.length === 0 && (
            <div className="flex items-center">
              <span className="text-green-400 text-xs md:text-base shrink-0">aniruddha@portfolio:~$ </span>
              <input
                ref={inputRef}
                type="text"
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1 bg-transparent outline-none text-green-400 font-mono text-sm md:text-base min-w-0"
                autoFocus
              />
            </div>
          )}
        </div>
      </div>

      {/* Bottom Status Bar */}
      <div className="bg-green-500/10 border-t border-green-500/30 p-2">
        <div className="flex justify-between items-center text-green-400 text-xs font-mono">
          <div className="flex items-center gap-2 md:gap-4">
            <span className="hidden md:inline">aniruddha@portfolio:~$</span>
            <span>Ready</span>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <span className="hidden md:inline">Lines: {history.length}</span>
            <span>{new Date().toLocaleTimeString()}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
