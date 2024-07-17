export default [
    {
        name: "Write Email",
        desc: "This is your AI-powered Email writer. It helps to write more professional emails.",
        icon: "https://cdn-icons-png.flaticon.com/128/4185/4185808.png",
        category: "Email",
        slug: "email-write",
        aiPrompt: "Based on the topic, write a professional email and provide the output in rich text editor format.",
        form: [
            {
                "label": "Email Topic",
                "field": "input",
                "name": "topic",
                "required": true
            }
        ]
    },
    {
        "name": "Comedy AI Assistant",
        "desc": "Enjoy jokes, puns, and humorous conversations with a virtual comedian.",
        "icon": "https://cdn-icons-png.flaticon.com/128/8149/8149305.png",
        "category": "Entertainment",
        "slug": "comedy-ai-assistant",
        "aiPrompt": "Laugh and enjoy jokes, puns, and humorous conversations with your virtual comedian. also give me 2024 trending jokes aditional with emoji",
        "language": ["English"],
        "form": [
            {
                "label": "Message",
                "field": "textarea",
                "name": "message",
                "required": true
            }
        ]
    },
    {
        "name": "Storytelling AI Assistant",
        "desc": "Listen to or read engaging stories and narratives told by a virtual storyteller.",
        "icon": "https://cdn-icons-png.flaticon.com/128/5190/5190506.png",
        "category": "Entertainment",
        "slug": "storytelling-ai-assistant",
        "aiPrompt": "Enjoy engaging stories and narratives told by your virtual storyteller.",
        "language": ["English"],
        "form": [
            {
                "label": "Story Request",
                "field": "textarea",
                "name": "storyRequest",
                "required": true
            }
        ]
    },
    {
        "name": "Movie Summary AI Assistant",
        "desc": "Get concise summaries and details of movies, including plot, characters, and reviews.",
        "icon": "https://cdn-icons-png.flaticon.com/128/3163/3163478.png",
        "category": "Entertainment",
        "slug": "movie-summary-ai-assistant",
        "aiPrompt": "Get concise summaries and details of movies, including plot, characters, and reviews.",
        "language": ["English"],
        "form": [
            {
                "label": "Movie Title",
                "field": "input",
                "name": "movieTitle",
                "required": true
            }
        ]
    },
    {
        "name": "Books Summary AI Assistant",
        "desc": "Get concise summaries and details of books, including plot, characters, and reviews.",
        "icon": "https://cdn-icons-png.flaticon.com/128/167/167755.png",
        "category": "Literature",
        "slug": "books-summary-ai-assistant",
        "aiPrompt": "Get concise summaries and details of books, including plot, characters, and reviews.",
        "language": ["English"],
        "form": [
            {
                "label": "Book Title",
                "field": "input",
                "name": "bookTitle",
                "required": true
            }
        ]
    },
    {
            "name": "Any Song Lyrics AI Assistant",
            "desc": "Get lyrics for any song, including popular hits and lesser-known tracks. If lyrics are not found in the database, they will be retrieved from the internet. Answers will include relevant emojis.",
            "icon": "https://cdn-icons-png.flaticon.com/128/2400/2400811.png",
            "category": "Entertainment",
            "slug": "song-lyrics-ai-assistant",
            "aiPrompt": "Provide the full lyrics of the specified song, including all verses, choruses, and any other parts of the song. Ensure the lyrics are accurate and complete. If there are multiple versions of the song, provide the most well-known version. If the song is in a language other than English, provide the lyrics in the original language along with an English translation. If the lyrics are not found in the database, search the internet and other websites to provide a complete answer. Add relevant emojis to the response.",
            "form": [
                {
                    "label": "Song Title",
                    "field": "input",
                    "name": "songTitle",
                    "required": true
                },
                {
                    "label": "Author Name",
                    "field": "input",
                    "name": "authorName",
                    "required": false
                }
            ]
        },
        {
        "name": "Any Singer Details AI Assistant",
        "desc": "Get information and details about any singer, including biography and discography.",
        "icon": "https://t3.ftcdn.net/jpg/06/44/78/26/240_F_644782674_IPbfnEmDsbYAghUHxmTMePAAI8F1hfZ5.jpg",
        "category": "Music",
        "slug": "singer-details-ai-assistant",
        "aiPrompt": "Get information and details about any singer, including biography and discography.",
        "language": ["English"],
        "form": [
            {
                "label": "Singer Name",
                "field": "input",
                "name": "singerName",
                "required": true
            }
        ]
    },
    {
            "name": "Mahatma Gandhi AI Assistant",
            "desc": "Ask questions about non-violence, independence movements, and social reforms.",
            "icon": "https://cdn-icons-png.flaticon.com/128/3336/3336228.png",
            "category": "Famous Personalities",
            "slug": "mahatma-gandhi-ai-assistant",
            "aiPrompt": "Ask any question related to non-violence, independence movements, and social reforms as if you were asking Mahatma Gandhi.reply as a gandhi with advice",
            "form": [
                {
                    "label": "Question",
                    "field": "textarea",
                    "name": "question",
                    "required": true
                }
            ]
        },
        {
            "name": "Dr. APJ Abdul Kalam AI Assistant",
            "desc": "Ask questions about aerospace engineering, missile technology, and education.",
            "icon": "https://www.shutterstock.com/image-vector/dr-apj-abdul-kalam-full-600nw-2405030779.jpg",
            "category": "Famous Personalities",
            "slug": "apj-abdul-kalam-ai-assistant",
            "aiPrompt": "Ask any question related to aerospace engineering, missile technology, and education as if you were asking Dr. APJ Abdul Kalam.reply as a apj abdul kalam with smart tone and also with one of her motivation line",
            "form": [
                {
                    "label": "Question",
                    "field": "textarea",
                    "name": "question",
                    "required": true
                }
            ]
        },
        {
            "name": "Rabindranath Tagore AI Assistant",
            "desc": "Ask questions about literature, poetry, and music.",
            "icon": "https://www.shutterstock.com/image-vector/rabindranath-tagore-colourful-illustration-oil-260nw-2298441363.jpg",
            "category": "Famous Personalities",
            "slug": "rabindranath-tagore-ai-assistant",
            "aiPrompt": "Ask any question related to literature, poetry, and music as if you were asking Rabindranath Tagore.reply as a rabindranath with one funny real example",
            "form": [
                {
                    "label": "Question",
                    "field": "textarea",
                    "name": "question",
                    "required": true
                }
            ]
        },
        {
            "name": "Virat Kohli AI Assistant",
            "desc": "Ask questions about cricket, fitness, and sportsmanship.",
            "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTv502MXjRurhrE-DxrVCFmGggRu4SswiMkXBMtlZzLpPTcgb8YkSzYNuaiSVsZuNujkk&usqp=CAU",
            "category": "Famous Personalities",
            "slug": "virat-kohli-ai-assistant",
            "aiPrompt": "Ask any question related to cricket, fitness, and sportsmanship as if you were asking Virat Kohli. reply as a virat kohli with funny tone",
            "form": [
                {
                    "label": "Question",
                    "field": "textarea",
                    "name": "question",
                    "required": true
                }
            ]
        },
        {
            "name": "Sachin Tendulkar AI Assistant",
            "desc": "Ask questions about cricket, batting techniques, and sports achievements.",
            "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg4-fRNMoxeHzWDA4mmWtfooUb_Dgvg1p_FLIgfdD4XGFAtMEJ-QHDKPXil255WjD39JI&usqp=CAU",
            "category": "Famous Personalities",
            "slug": "sachin-tendulkar-ai-assistant",
            "aiPrompt": "Ask any question related to cricket, batting techniques, and sports achievements as if you were asking Sachin Tendulkar.reply as a Sachin Tendulkar",
            "form": [
                {
                    "label": "Question",
                    "field": "textarea",
                    "name": "question",
                    "required": true
                }
            ]
        },
        {
            "name": "Amitabh Bachchan AI Assistant",
            "desc": "Ask questions about acting, Bollywood, and film industry insights.",
            "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVVy2hYGRx-_dBQl8MF3yVstZh0SEhZ9QbMhJiRp_ENGDWfatTE-QsKS6FeuBQn7TGg9Y&usqp=CAU",
            "category": "Famous Personalities",
            "slug": "amitabh-bachchan-ai-assistant",
            "aiPrompt": "Ask any question related to acting, Bollywood, and film industry insights as if you were asking Amitabh Bachchan.reply like a amitabh bachchan",
            "form": [
                {
                    "label": "Question",
                    "field": "textarea",
                    "name": "question",
                    "required": true
                }
            ]
        },
         {
        "name": "Zubeen Garg  ##not ready",
        "desc": "Ask questions about music, singing techniques, and career insights.",
        "icon": "https://i.pinimg.com/236x/79/4f/50/794f50ed47592c1e516d7be7443a4c0d.jpg",
        "category": "Famous Personalities",
        "slug": "zubeen-garg-ai-assistant",
        "aiPrompt": "Ask any question related to music, singing techniques, and career insights as if you were asking Zubeen Garg.",
        "language": ["English", "Assamese"],
        "form": [
            {
                "label": "Question",
                "field": "textarea",
                "name": "question",
                "required": true
            }
        ]
    },
    {
            "name": "Elon Musk AI Assistant",
            "desc": "Ask questions related to technology, space exploration, electric vehicles, and entrepreneurship.",
            "icon": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjIQ1OR_FAfePA_otWpqeMewvjUj34NEeSfQl3XRR0uvgLWK4U2rN2fq8N7kxhf_vNcPck9lBh_czAIrhwkX6T7J8mZ3HEUAYo4MPQL-8pFP9O_W3VIttevuhM-iF3CCMo6U4oUwuccQ6iZMkEyecF828eIEdDOzQ52ajpa1bVUr0ZFxONpOLOp2ag7cWM4/s734/Elon_Musk.jpg",
            "category": "Famous Personalities",
            "slug": "elon-musk-ai-assistant",
            "aiPrompt": "Ask any question related to technology, space exploration, electric vehicles, or entrepreneurship as if you were asking Elon Musk. Replay as a Elon Musk with Real Time advice also with emoji",
            "form": [
                {
                    "label": "Question",
                    "field": "textarea",
                    "name": "question",
                    "required": true
                }
            ]
        },
        {
            "name": "Steve Jobs AI Assistant",
            "desc": "Ask questions about innovation, design, and product development in the tech industry.",
            "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ4V_IqG1fMlH-ZI8tKHuy4tZu8kd14UWUrA&s",
            "category": "Famous Personalities",
            "slug": "steve-jobs-ai-assistant",
            "aiPrompt": "Ask any question related to innovation, design, and product development in the tech industry as if you were asking Steve Jobs. Reply as a Real Steve Jobe with serious advice for Future",
            "form": [
                {
                    "label": "Question",
                    "field": "textarea",
                    "name": "question",
                    "required": true
                }
            ]
        },
        {
            "name": "Albert Einstein AI Assistant",
            "desc": "Ask questions about theoretical physics, relativity, and scientific discoveries.",
            "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxvTgd6HJ-IcgTt_B4k01a2IX_Ou_prwPQHQ&s",
            "category": "Famous Personalities",
            "slug": "albert-einstein-ai-assistant",
            "aiPrompt": "Ask any question related to theoretical physics, relativity, and scientific discoveries as if you were asking Albert Einstein.Replay as a Albert with friendly way . And answer all physics question in point wise and systematic",
            "form": [
                {
                    "label": "Question",
                    "field": "textarea",
                    "name": "question",
                    "required": true
                }
            ]
        },
        {
            "name": "Nikola Tesla AI Assistant",
            "desc": "Ask questions about electrical engineering, inventions, and futuristic technologies.",
            "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYUOcjY_V2dNRu-0D96anDxTqcQ5Zv7l0Eug&s",
            "category": "Famous Personalities",
            "slug": "nikola-tesla-ai-assistant",
            "aiPrompt": "Ask any question related to electrical engineering, inventions, and futuristic technologies as if you were asking Nikola Tesla.Replay as a nikola Tesla And Answer completed easy and details way",
            "form": [
                {
                    "label": "Question",
                    "field": "textarea",
                    "name": "question",
                    "required": true
                }
            ]
        },
        {
            "name": "Leonardo da Vinci AI Assistant",
            "desc": "Ask questions about art, engineering, anatomy, and Renaissance innovations.",
            "icon": "https://media.istockphoto.com/id/96372752/vector/black-and-white-portrait-of-leonardo-da-vinci.jpg?s=612x612&w=0&k=20&c=HvDvq5tnhrlG_Q1XSQ9hdWqxuB6w2nzx8AFTns1IJ7c=",
            "category": "Famous Personalities",
            "slug": "leonardo-da-vinci-ai-assistant",
            "aiPrompt": "Ask any question related to art, engineering, anatomy, and Renaissance innovations as if you were asking Leonardo da Vinci. replay as  Renaissance with deep meaning ",
            "form": [
                {
                    "label": "Question",
                    "field": "textarea",
                    "name": "question",
                    "required": true
                }
            ]
        },
        {
            "name": "Stephen Hawking AI Assistant",
            "desc": "Ask questions about black holes, cosmology, and theoretical physics.",
            "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ42ts1Nj5MrjKVv2MoCxy0j27WjUjo4Z9b4g&s",
            "category": "Famous Personalities",
            "slug": "stephen-hawking-ai-assistant",
            "aiPrompt": "Ask any question related to black holes, cosmology, and theoretical physics as if you were asking Stephen Hawking.",
            "form": [
                {
                    "label": "Question",
                    "field": "textarea",
                    "name": "question",
                    "required": true
                }
            ]
        },
        {
            "name": "Mark Zuckerberg AI Assistant",
            "desc": "Ask questions about social media, tech startups, and online communities.",
            "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScaYbbi_8FuBYs7hZpEbIJ9wargPZm0XzSmQ&s",
            "category": "Famous Personalities",
            "slug": "mark-zuckerberg-ai-assistant",
            "aiPrompt": "Ask any question related to social media, tech startups, and online communities as if you were asking Mark Zuckerberg.",
            "form": [
                {
                    "label": "Question",
                    "field": "textarea",
                    "name": "question",
                    "required": true
                }
            ]
        },
        {
            "name": "Bill Gates AI Assistant",
            "desc": "Ask questions about software development, philanthropy, and technology trends.",
            "icon": "https://imageio.forbes.com/specials-images/imageserve/62d599ede3ff49f348f9b9b4/0x0.jpg?format=jpg&crop=821,821,x155,y340,safe&height=416&width=416&fit=bounds",
            "category": "Famous Personalities",
            "slug": "bill-gates-ai-assistant",
            "aiPrompt": "Ask any question related to software development, philanthropy, and technology trends as if you were asking Bill Gates.",
            "form": [
                {
                    "label": "Question",
                    "field": "textarea",
                    "name": "question",
                    "required": true
                }
            ]
        },
        {
            "name": "Jeff Bezos AI Assistant",
            "desc": "Ask questions about e-commerce, business strategy, and space exploration.",
            "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6sgPKnJLV3wLbjVX4KCYJtiXzBFJ3FCNv_Q&s",
            "category": "Famous Personalities",
            "slug": "jeff-bezos-ai-assistant",
            "aiPrompt": "Ask any question related to e-commerce, business strategy, and space exploration as if you were asking Jeff Bezos.",
            "form": [
                {
                    "label": "Question",
                    "field": "textarea",
                    "name": "question",
                    "required": true
                }
            ]
        },
        {
            "name": "Python Master Professional AI Tutor",
            "desc": "Learn and master Python programming language with AI-powered tutoring.",
            "icon": "https://cdn-icons-png.flaticon.com/128/3098/3098090.png",
            "category": "Programming Education",
            "slug": "python-ai-tutor",
            "aiPrompt": "Ask questions about Python programming concepts, get explanations, and receive code examples.",
            "form": [
                {
                    "label": "Question",
                    "field": "textarea",
                    "name": "question",
                    "required": true
                }
            ]
        },
        {
            "name": "Java Master Professional AI Tutor",
            "desc": "Learn and master Java programming language with AI-powered tutoring.",
            "icon": "https://cdn-icons-png.flaticon.com/128/226/226777.png",
            "category": "Programming Education",
            "slug": "java-ai-tutor",
            "aiPrompt": "Ask questions about Java programming concepts, get explanations, and receive code examples.",
            "form": [
                {
                    "label": "Question",
                    "field": "textarea",
                    "name": "question",
                    "required": true
                }
            ]
        },
        {
            "name": "JavaScript Master Professional AI Tutor",
            "desc": "Learn and master JavaScript programming language with AI-powered tutoring.",
            "icon": "https://cdn-icons-png.flaticon.com/128/1199/1199124.png",
            "category": "Programming Education",
            "slug": "javascript-ai-tutor",
            "aiPrompt": "Ask questions about JavaScript programming concepts, get explanations, and receive code examples.",
            "form": [
                {
                    "label": "Question",
                    "field": "textarea",
                    "name": "question",
                    "required": true
                }
            ]
        },
        {
            "name": "C# Master Professional AI Tutor",
            "desc": "Learn and master C# programming language with AI-powered tutoring.",
            "icon": "https://cdn-icons-png.flaticon.com/128/6132/6132221.png",
            "category": "Programming Education",
            "slug": "csharp-ai-tutor",
            "aiPrompt": "Ask questions about C# programming concepts, get explanations, and receive code examples.",
            "form": [
                {
                    "label": "Question",
                    "field": "textarea",
                    "name": "question",
                    "required": true
                }
            ]
        },
        {
            "name": "Ruby Master Professional AI Tutor",
            "desc": "Learn and master Ruby programming language with AI-powered tutoring.",
            "icon": "https://cdn-icons-png.flaticon.com/128/3227/3227897.png",
            "category": "Programming Education",
            "slug": "ruby-ai-tutor",
            "aiPrompt": "Ask questions about Ruby programming concepts, get explanations, and receive code examples.",
            "form": [
                {
                    "label": "Question",
                    "field": "textarea",
                    "name": "question",
                    "required": true
                }
            ]
        },
        {
            "name": "PHP Master Professional AI Tutor",
            "desc": "Learn and master PHP programming language with AI-powered tutoring.",
            "icon": "https://cdn-icons-png.flaticon.com/128/1/1975.png",
            "category": "Programming Education",
            "slug": "php-ai-tutor",
            "aiPrompt": "Ask questions about PHP programming concepts, get explanations, and receive code examples.",
            "form": [
                {
                    "label": "Question",
                    "field": "textarea",
                    "name": "question",
                    "required": true
                }
            ]
        },
        {
            "name": "Swift Master Professional AI Tutor",
            "desc": "Learn and master Swift programming language with AI-powered tutoring.",
            "icon": "https://cdn-icons-png.flaticon.com/128/5968/5968371.png",
            "category": "Programming Education",
            "slug": "swift-ai-tutor",
            "aiPrompt": "Ask questions about Swift programming concepts, get explanations, and receive code examples.",
            "form": [
                {
                    "label": "Question",
                    "field": "textarea",
                    "name": "question",
                    "required": true
                }
            ]
        },
        {
            "name": "Kotlin Master Professional AI Tutor",
            "desc": "Learn and master Kotlin programming language with AI-powered tutoring.",
            "icon": "https://cdn3d.iconscout.com/3d/free/preview/free-kotlin-9294865-7578008.png?f=webp&h=700",
            "category": "Programming Education",
            "slug": "kotlin-ai-tutor",
            "aiPrompt": "Ask questions about Kotlin programming concepts, get explanations, and receive code examples.",
            "form": [
                {
                    "label": "Question",
                    "field": "textarea",
                    "name": "question",
                    "required": true
                }
            ]
        },
        {
            "name": "TypeScript Master Professional AI Tutor",
            "desc": "Learn and master TypeScript programming language with AI-powered tutoring.",
            "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdfGSCzMIl8LHYhlF9rMR0rmRyDMGEmpCoOg&s",
            "category": "Programming Education",
            "slug": "typescript-ai-tutor",
            "aiPrompt": "Ask questions about TypeScript programming concepts, get explanations, and receive code examples.",
            "form": [
                {
                    "label": "Question",
                    "field": "textarea",
                    "name": "question",
                    "required": true
                }
            ]
        },
        {
            "name": "SQL Master Professional AI Tutor",
            "desc": "Learn and master SQL programming language with AI-powered tutoring.",
            "icon": "https://cdn-icons-png.flaticon.com/128/2772/2772128.png",
            "category": "Programming Education",
            "slug": "sql-ai-tutor",
            "aiPrompt": "Ask questions about SQL programming concepts, get explanations, and receive query examples.",
            "form": [
                {
                    "label": "Question",
                    "field": "textarea",
                    "name": "question",
                    "required": true
                }
            ]
        },
        {
            "name": "Go Master Professional AI Tutor",
            "desc": "Learn and master Go programming language with AI-powered tutoring.",
            "icon": "https://miro.medium.com/v2/resize:fit:1400/1*Ifpd_HtDiK9u6h68SZgNuA.png",
            "category": "Programming Education",
            "slug": "go-ai-tutor",
            "aiPrompt": "Ask questions about Go programming concepts, get explanations, and receive code examples.",
            "form": [
                {
                    "label": "Question",
                    "field": "textarea",
                    "name": "question",
                    "required": true
                }
            ]
        },
        {
            "name": "Rust Master Professional AI Tutor",
            "desc": "Learn and master Rust programming language with AI-powered tutoring.",
            "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpO4CiQxKRfDAQ_b1LWVc20kjLYZcdaTWGsA&s",
            "category": "Programming Education",
            "slug": "rust-ai-tutor",
            "aiPrompt": "Ask questions about Rust programming concepts, get explanations, and receive code examples.",
            "form": [
                {
                    "label": "Question",
                    "field": "textarea",
                    "name": "question",
                    "required": true
                }
            ]
        },
        {
            "name": "Perl Master Professional AI Tutor",
            "desc": "Learn and master Perl programming language with AI-powered tutoring.",
            "icon": "https://pbs.twimg.com/profile_images/772720519418294272/Odq5Mdv8_400x400.jpg",
            "category": "Programming Education",
            "slug": "perl-ai-tutor",
            "aiPrompt": "Ask questions about Perl programming concepts, get explanations, and receive code examples.",
            "form": [
                {
                    "label": "Question",
                    "field": "textarea",
                    "name": "question",
                    "required": true
                }
            ]
        },
        {
            "name": "R Master Professional AI Tutor",
            "desc": "Learn and master R programming language with AI-powered tutoring.",
            "icon": "https://cdn-icons-png.flaticon.com/128/2103/2103665.png",
            "category": "Programming Education",
            "slug": "r-ai-tutor",
            "aiPrompt": "Ask questions about R programming concepts, get explanations, and receive code examples.",
            "form": [
                {
                    "label": "Question",
                    "field": "textarea",
                    "name": "question",
                    "required": true
                }
            ]
        },
        {
            "name": "MATLAB Master Professional AI Tutor",
            "desc": "Learn and master MATLAB programming language with AI-powered tutoring.",
            "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS07XUgOWbk7IyvAOZujV7JNPyhz66xnh5J9Q&s",
            "category": "Programming Education",
            "slug": "matlab-ai-tutor",
            "aiPrompt": "Ask questions about MATLAB programming concepts, get explanations, and receive code examples.",
            "form": [
                {
                    "label": "Question",
                    "field": "textarea",
                    "name": "question",
                    "required": true
                }
            ]
        },
        {
            "name": "Assembly Language Master Professional AI Tutor",
            "desc": "Learn and master Assembly Language programming with AI-powered tutoring.",
            "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyLsTSns1-aVG6fv3fDPdBzGY_4ch4hbgFbot693adzXQY_sQieB2bK1eN9QB9Xy7ltG8&usqp=CAU",
            "category": "Programming Education",
            "slug": "assembly-ai-tutor",
            "aiPrompt": "Ask questions about Assembly Language programming concepts, get explanations, and receive code examples.",
            "form": [
                {
                    "label": "Question",
                    "field": "textarea",
                    "name": "question",
                    "required": true
                }
            ]
        },
        {
            "name": "Scala Master Professional AI Tutor",
            "desc": "Learn and master Scala programming language with AI-powered tutoring.",
            "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOj12KYi99oLqQOEiQdikuLeQeb_0N4uEuug&s",
            "category": "Programming Education",
            "slug": "scala-ai-tutor",
            "aiPrompt": "Ask questions about Scala programming concepts, get explanations, and receive code examples.",
            "form": [
                {
                    "label": "Question",
                    "field": "textarea",
                    "name": "question",
                    "required": true
                }
            ]
        },
        {
            "name": "Haskell Master Professional AI Tutor",
            "desc": "Learn and master Haskell programming language with AI-powered tutoring.",
            "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8t_k39mUSy0k4DxjAp0_9vXowUwZUef14VQ&s",
            "category": "Programming Education",
            "slug": "haskell-ai-tutor",
            "aiPrompt": "Ask questions about Haskell programming concepts, get explanations, and receive code examples.",
            "form": [
                {
                    "label": "Question",
                    "field": "textarea",
                    "name": "question",
                    "required": true
                }
            ]
        },
        {
            "name": "Lua Master Professional AI Tutor",
            "desc": "Learn and master Lua programming language with AI-powered tutoring.",
            "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnYuHiZMYbacneYKZA6TlO8WgXrs05VC8rMQ&s",
            "category": "Programming Education",
            "slug": "lua-ai-tutor",
            "aiPrompt": "Ask questions about Lua programming concepts, get explanations, and receive code examples.",
            "form": [
                {
                    "label": "Question",
                    "field": "textarea",
                    "name": "question",
                    "required": true
                }
            ]
        },
        {
            "name": "Julia Master Professional AI Tutor",
            "desc": "Learn and master Julia programming language with AI-powered tutoring.",
            "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsl_tB5b9Z1fRdCkQAxojTWKSP8K3H99eRrw&s",
            "category": "Programming Education",
            "slug": "julia-ai-tutor",
            "aiPrompt": "Ask questions about Julia programming concepts, get explanations, and receive code examples.",
            "form": [
                {
                    "label": "Question",
                    "field": "textarea",
                    "name": "question",
                    "required": true
                }
            ]
        },
        {
            "name": "Dart Master Professional AI Tutor",
            "desc": "Learn and master Dart programming language with AI-powered tutoring.",
            "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBGCABe5ONbJGMZNK_8XEXumK1nctU3wpfuCaQUosdGLI-DZkakW25pyA2ZgDtFxgi6JY&usqp=CAU",
            "category": "Programming Education",
            "slug": "dart-ai-tutor",
            "aiPrompt": "First Introduce yourself as a Dart professional AI . Ask questions about Dart programming concepts, get explanations, and receive code examples. Full Point wise explanations with emoji and easy or fuuny way",
            "form": [
                {
                    "label": "Question",
                    "field": "textarea",
                    "name": "question",
                    "required": true
                }
            ]
        },
        {
            "name": "Groovy Master Professional AI Tutor",
            "desc": "Learn and master Groovy programming language with AI-powered tutoring.",
            "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUEhFlp3x8iud4zg5vE5CNXNytrDLCdt4tAw&s",
            "category": "Programming Education",
            "slug": "groovy-ai-tutor",
            "aiPrompt": "Ask questions about Groovy programming concepts, get explanations, and receive code examples.",
            "form": [
                {
                    "label": "Question",
                    "field": "textarea",
                    "name": "question",
                    "required": true
                }
            ]
        },
        {
            "name": "Bash Master Professional AI Tutor",
            "desc": "Learn and master Bash scripting with AI-powered tutoring.",
            "icon": "https://cdn-icons-png.flaticon.com/128/919/919837.png",
            "category": "Programming Education",
            "slug": "bash-ai-tutor",
            "aiPrompt": "Ask questions about Bash scripting concepts, get explanations, and receive code examples.",
            "form": [
                {
                    "label": "Question",
                    "field": "textarea",
                    "name": "question",
                    "required": true
                }
            ]
        },
        {
            "name": "Visual Basic .NET Master Professional AI Tutor",
            "desc": "Learn and master Visual Basic .NET programming language with AI-powered tutoring.",
            "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNyp8CVKlXQ693CX7c7qCWAWHkfjco0arnOQ&s",
            "category": "Programming Education",
            "slug": "vb-net-ai-tutor",
            "aiPrompt": "Ask questions about Visual Basic .NET programming concepts, get explanations, and receive code examples.",
            "form": [
                {
                    "label": "Question",
                    "field": "textarea",
                    "name": "question",
                    "required": true
                }
            ]
        },
        {
            "name": "Fortran Master Professional AI Tutor",
            "desc": "Learn and master Fortran programming language with AI-powered tutoring.",
            "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKGok5J6w5lMnHHwQ7o0GfgjT3ABZbavnh6w&s",
            "category": "Programming Education",
            "slug": "fortran-ai-tutor",
            "aiPrompt": "Ask questions about Fortran programming concepts, get explanations, and receive code examples.",
            "form": [
                {
                    "label": "Question",
                    "field": "textarea",
                    "name": "question",
                    "required": true
                }
            ]
        },
        {
            "name": "COBOL Master Professional AI Tutor",
            "desc": "Learn and master COBOL programming language with AI-powered tutoring.",
            "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNQhLvXPoTFkX6vyzYzlONrtF77hawu1fLfQ&s",
            "category": "Programming Education",
            "slug": "cobol-ai-tutor",
            "aiPrompt": "Ask questions about COBOL programming concepts, get explanations, and receive code examples.",
            "form": [
                {
                    "label": "Question",
                    "field": "textarea",
                    "name": "question",
                    "required": true
                }
            ]
        },
        {
            "name": "Prolog Master Professional AI Tutor",
            "desc": "Learn and master Prolog programming language with AI-powered tutoring.",
            "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0BvThAP4vs6OXnBjkh3hglLIDZdzHzEicn8deMzm5Zmi5CGopXVWrsdMV8EcM52LYKAo&usqp=CAU",
            "category": "Programming Education",
            "slug": "prolog-ai-tutor",
            "aiPrompt": "Ask questions about Prolog programming concepts, get explanations, and receive code examples.",
            "form": [
                {
                    "label": "Question",
                    "field": "textarea",
                    "name": "question",
                    "required": true
                }
            ]
        }, 
        {
        "name": "C and C++ Master Professional AI Tutor",
        "desc": "Learn and master C and C++ programming languages with AI-powered tutoring.",
        "icon": "https://cdn-icons-png.flaticon.com/128/6132/6132222.png",
        "category": "Programming Education",
        "slug": "c-cpp-ai-tutor",
        "aiPrompt": "Ask questions about C and C++ programming concepts, get explanations, and receive code examples.",
        "form": [
            {
                "label": "Question",
                "field": "textarea",
                "name": "question",
                "required": true
            }
        ]
    },
    {
        "name": "Interview Preparation Assistant",
        "desc": "Prepare for interviews with simulated scenarios and personalized feedback.",
        "icon": "https://cdn-icons-png.flaticon.com/128/1329/1329059.png",
        "category": "Career Development",
        "slug": "interview-prep-assistant",
        "aiPrompt": "Simulate interview scenarios based on the job role and provide personalized feedback.",
        "form": [
            {
                "label": "Job Role",
                "field": "input",
                "name": "jobRole",
                "required": true
            }
        ]
    },
    {
        "name": "Creative Writing Enhancer",
        "desc": "Enhance your creative writing with style and vocabulary suggestions.",
        "icon": "https://cdn-icons-png.flaticon.com/128/15271/15271183.png",
        "category": "Writing/Content Creation",
        "slug": "creative-writing-enhancer",
        "aiPrompt": "Provide a piece of writing to enhance with style and vocabulary suggestions.",
        "form": [
            {
                "label": "Writing Sample",
                "field": "textarea",
                "name": "writingSample",
                "required": true
            }
        ]
    },
    {
        "name": "Legal Compliance Checker",
        "desc": "Ensure compliance with legal regulations and industry standards.",
        "icon": "https://cdn-icons-png.flaticon.com/128/11782/11782589.png",
        "category": "Legal/Compliance",
        "slug": "legal-compliance-checker",
        "aiPrompt": "Check compliance status for specific legal regulations and provide recommendations.",
        "form": [
            {
                "label": "Regulation Name",
                "field": "input",
                "name": "regulationName",
                "required": true
            }
        ]
    },
    {
        "name": "Project Management Assistant",
        "desc": "Manage projects efficiently with task assignment and progress tracking.",
        "icon": "https://cdn-icons-png.flaticon.com/128/10857/10857083.png",
        "category": "Project Management",
        "slug": "project-management-assistant",
        "aiPrompt": "Assist in managing a project by assigning tasks and tracking progress.",
        "form": [
            {
                "label": "Project Name",
                "field": "input",
                "name": "projectName",
                "required": true
            }
        ]
    },
    {
        "name": "Learning Path Advisor",
        "desc": "Discover personalized learning paths and career development strategies.",
        "icon": "https://cdn-icons-png.flaticon.com/128/3829/3829815.png",
        "category": "Education/Career Development",
        "slug": "learning-path-advisor",
        "aiPrompt": "Recommend learning paths based on career goals and skills assessment.",
        "form": [
            {
                "label": "Career Goal",
                "field": "input",
                "name": "careerGoal",
                "required": true
            }
        ]
    },
    {
        "name": "Personal Loan Calculator",
        "desc": "Calculate personal loan options based on amount, interest rate, and term.",
        "icon": "https://cdn-icons-png.flaticon.com/128/1538/1538293.png",
        "category": "Finance/Personal Development",
        "slug": "personal-loan-calculator",
        "aiPrompt": "Calculate monthly payments and total interest for personal loan options.",
        "form": [
            {
                "label": "Loan Amount ($)",
                "field": "number",
                "name": "loanAmount",
                "required": true
            },
            {
                "label": "Interest Rate (%)",
                "field": "number",
                "name": "interestRate",
                "required": true
            },
            {
                "label": "Loan Term (years)",
                "field": "number",
                "name": "loanTerm",
                "required": true
            }
        ]
    },
    {
        "name": "Personal Lawyer Assistant",
        "desc": "Get legal advice, draft documents, and manage legal matters with ease.",
        "icon": "https://cdn-icons-png.flaticon.com/128/9894/9894001.png",
        "category": "Legal/Professional",
        "slug": "personal-lawyer-assistant",
        "aiPrompt": "Provide details of your legal issue or document you need assistance with.",
        "form": [
            {
                "label": "Legal Issue",
                "field": "textarea",
                "name": "legalIssue",
                "required": true
            },
            {
                "label": "Describe any potential crime (optional)",
                "field": "textarea",
                "name": "crimeDescription",
                "required": false
            }
        ],
        "responseTemplate": {
            "legalAdvice": "Based on your description, it appears you have a dispute with your landlord regarding property access rights. You may want to review your lease agreement and local rental laws for guidance. Consider discussing your concerns directly with your landlord or seeking legal advice for a more detailed assessment.",
            "crimeAnalysis": "Your suspicion of unauthorized entry by your landlord could potentially involve violations related to property rights and privacy laws. This could be considered trespassing or unlawful entry. According to IPC Section 439, this offense may include [brief description of IPC section]. Please consult with a legal professional for detailed analysis and advice specific to your situation."
        }
    
    
    },
    {
        "name": "Savage Reply Generator",
        "desc": "Craft witty and clever responses for humorous interactions with friends.",
        "icon": "https://cdn-icons-png.flaticon.com/128/10035/10035497.png",
        "category": "Social/Entertainment",
        "slug": "savage-reply-generator",
        "aiPrompt": "Generate a witty response for a fun or light-hearted interaction with friends.",
        "form": [
            {
                "label": "Friend's Message",
                "field": "input",
                "name": "friendsMessage",
                "required": true
            }
        ]
    },
    {
        "name": "Rewrite Your Email",
        "desc": "This is your AI-powered Email rewriter. It helps to correct your email's grammar and write more professional emails.",
        "icon": "https://cdn-icons-png.flaticon.com/128/6125/6125875.png",
        "category": "Email",
        "slug": "email-rewriter",
        "aiPrompt": "Based on the email body, rewrite the email, correct grammar, and provide the output in rich text editor format.",
        "form": [
            {
                "label": "Your Email",
                "field": "textarea",
                "name": "email-body",
                "required": true
            }
        ]
    },
    {
        "name": "Blog Title Generator",
        "desc": "This is your AI-powered Blog Title Generator. It helps generate catchy and relevant blog titles.",
        "icon": "https://cdn-icons-png.flaticon.com/128/6114/6114045.png",
        "category": "Blog",
        "slug": "blog-title-generator",
        "aiPrompt": "Based on the blog topic, generate a list of catchy and relevant blog titles.",
        "form": [
            {
                "label": "Blog Topic",
                "field": "input",
                "name": "blog-topic",
                "required": true
            }
        ]
    },
    {
    "name": "AI Resume Builder",
    "desc": "This is your AI-powered Resume Builder. It helps create professional resumes.",
    "icon": "https://cdn-icons-png.flaticon.com/128/11890/11890827.png",
    "category": "Resume",
    "slug": "ai-resume-builder",
    "aiPrompt": "Based on provided details, create a professional resume.",
    "form": [
        {
            "label": "Personal Details",
            "field": "group",
            "children": [
                {
                    "label": "Full Name",
                    "field": "input",
                    "name": "fullName",
                    "type": "text",
                    "required": true
                },
                {
                    "label": "Phone Number",
                    "field": "input",
                    "name": "phone",
                    "type": "tel",
                    "required": true
                },
                {
                    "label": "Email Address",
                    "field": "input",
                    "name": "email",
                    "type": "email",
                    "required": true
                },
                {
                    "label": "Location",
                    "field": "input",
                    "name": "location",
                    "type": "text",
                    "required": true
                },
                {
                    "label": "Profile Picture Upload",
                    "field": "input",
                    "name": "profilePic",
                    "type": "file"
                }
            ]
        },
        {
            "label": "Work Experience",
            "field": "textarea",
            "name": "workExperience",
            "required": true
        },
        {
            "label": "Education",
            "field": "textarea",
            "name": "education",
            "required": true
        },
        {
            "label": "Internships (Optional)",
            "field": "group",
            "children": [
                {
                    "label": "Internship Details",
                    "field": "textarea",
                    "name": "internships",
                    "description": "Include company name, location, internship title, dates, and key responsibilities/achievements."
                }
            ]
        },
        {
            "label": "Programming Projects (Optional)",
            "field": "group",
            "children": [
                {
                    "label": "Project Details",
                    "field": "textarea",
                    "name": "projects",
                    "description": "Include project title, technologies used, description, and achievements."
                }
            ]
        },
        {
            "label": "Skills",
            "field": "group",
            "children": [
                {
                    "label": "Skill 1",
                    "field": "input",
                    "name": "skill1",
                    "type": "text",
                    "description": "Describe skill 1 briefly"
                },
                {
                    "label": "Skill 2",
                    "field": "input",
                    "name": "skill2",
                    "type": "text",
                    "description": "Describe skill 2 briefly"
                },
                {
                    "label": "Skill 3",
                    "field": "input",
                    "name": "skill3",
                    "type": "text",
                    "description": "Describe skill 3 briefly"
                }
            ]
        },
        {
            "label": "Social Media Links",
            "field": "group",
            "children": [
                {
                    "label": "LinkedIn",
                    "field": "input",
                    "name": "linkedin",
                    "type": "url",
                    "icon": "https://cdn-icons-png.flaticon.com/128/174/174857.png"
                },
                {
                    "label": "GitHub",
                    "field": "input",
                    "name": "github",
                    "type": "url",
                    "icon": "https://cdn-icons-png.flaticon.com/128/25/25231.png"
                },
                {
                    "label": "Twitter",
                    "field": "input",
                    "name": "twitter",
                    "type": "url",
                    "icon": "https://cdn-icons-png.flaticon.com/128/124/124021.png"
                },
                {
                    "label": "Facebook",
                    "field": "input",
                    "name": "facebook",
                    "type": "url",
                    "icon": "https://cdn-icons-png.flaticon.com/128/124/124010.png"
                },
                {
                    "label": "Other (Specify)",
                    "field": "input",
                    "name": "otherSocial",
                    "type": "url",
                    "icon": "https://cdn-icons-png.flaticon.com/128/684/684809.png"
                }
            ]
        },
        {
            "label": "Professional Style Preferences",
            "field": "group",
            "children": [
                {
                    "label": "Color Scheme",
                    "field": "input",
                    "name": "colorScheme",
                    "type": "text",
                    "description": "Specify preferred colors or leave blank for default"
                },
                {
                    "label": "Layout Style",
                    "field": "input",
                    "name": "layoutStyle",
                    "type": "text",
                    "description": "Specify modern, classic, etc."
                },
                {
                    "label": "Font Preferences",
                    "field": "input",
                    "name": "fontPreferences",
                    "type": "text",
                    "description": "Specify preferred fonts"
                }
            ]
        }
    ]
    },
    {
        "name": "Education Tutor",
        "desc": "This is your AI-powered Education Tutor. It helps with general education topics.",
        "icon": "https://cdn-icons-png.flaticon.com/128/3135/3135777.png",
        "category": "Education",
        "slug": "education-tutor",
        "aiPrompt": "Provide educational assistance based on the provided topic.",
        "form": [
            {
                "label": "Topic",
                "field": "input",
                "name": "topic",
                "required": true
            }
        ]
    },
    {
        "name": "Chemistry Tutor",
        "desc": "This is your AI-powered Chemistry Tutor. It helps with chemistry-related topics.",
        "icon": "https://cdn-icons-png.flaticon.com/128/5205/5205156.png",
        "category": "Science",
        "slug": "chemistry-tutor",
        "aiPrompt": "Provide assistance with chemistry topics.",
        "form": [
            {
                "label": "Chemistry Topic",
                "field": "input",
                "name": "chemistry-topic",
                "required": true
            }
        ]
    },
    {
        "name": "Physics Tutor",
        "desc": "This is your AI-powered Physics Tutor. It helps with physics-related topics.",
        "icon": "https://cdn-icons-png.flaticon.com/128/3254/3254075.png",
        "category": "Science",
        "slug": "physics-tutor",
        "aiPrompt": "Provide assistance with physics topics.",
        "form": [
            {
                "label": "Physics Topic",
                "field": "input",
                "name": "physics-topic",
                "required": true
            }
        ]
    },
    {
        "name": "Web Developer",
        "desc": "This is your AI-powered Web Developer assistant. It helps with web development tasks.",
        "icon": "https://cdn-icons-png.flaticon.com/128/919/919827.png",
        "category": "Development",
        "slug": "web-developer",
        "aiPrompt": "Provide assistance with web development tasks.",
        "form": [
            {
                "label": "Task Description",
                "field": "textarea",
                "name": "task-description",
                "required": true
            }
        ]
    },
    {
        "name": "Coding Tutor",
        "desc": "This is your AI-powered Coding Tutor. It helps with coding-related topics.",
        "icon": "https://cdn-icons-png.flaticon.com/128/906/906324.png",
        "category": "Development",
        "slug": "coding-tutor",
        "aiPrompt": "Provide assistance with coding topics.",
        "form": [
            {
                "label": "Coding Topic",
                "field": "input",
                "name": "coding-topic",
                "required": true
            }
        ]
    },
    {
        "name": "Cheat Assistant",
        "desc": "This is your AI-powered Cheat Assistant. It provides quick answers and solutions.",
        "icon": "https://cdn-icons-png.flaticon.com/128/11103/11103371.png",
        "category": "Assistant",
        "slug": "cheat-assistant",
        "aiPrompt": "Provide quick answers and solutions based on the provided question.",
        "form": [
            {
                "label": "Question",
                "field": "input",
                "name": "question",
                "required": true
            }
        ]
    },
    {
        "name": "System Error Assistant",
        "desc": "This is your AI-powered System Error Assistant. It helps troubleshoot system errors.",
        "icon": "https://cdn-icons-png.flaticon.com/128/190/190411.png",
        "category": "Assistant",
        "slug": "system-error-assistant",
        "aiPrompt": "Provide solutions for system errors based on the provided error message.",
        "form": [
            {
                "label": "Error Message",
                "field": "textarea",
                "name": "error-message",
                "required": true
            }
        ]
    },
    {
        "name": "Math Tutor",
        "desc": "This is your AI-powered Math Tutor. It helps with math-related topics.",
        "icon": "https://cdn-icons-png.flaticon.com/128/2436/2436648.png",
        "category": "Education",
        "slug": "math-tutor",
        "aiPrompt": "Provide assistance with math topics.",
        "form": [
            {
                "label": "Math Topic",
                "field": "input",
                "name": "math-topic",
                "required": true
            }
        ]
    },
    {
        "name": "English Speaker Tutor",
        "desc": "This is your AI-powered English Speaker Tutor. It helps with learning and practicing English.",
        "icon": "https://cdn-icons-png.flaticon.com/128/16614/16614136.png",
        "category": "Language",
        "slug": "english-speaker-tutor",
        "aiPrompt": "Provide assistance with learning and practicing English.",
        "form": [
            {
                "label": "Practice Topic",
                "field": "input",
                "name": "practice-topic",
                "required": true
            }
        ]
    },
    {
        "name": "Any Language Learn Tutor",
        "desc": "This is your AI-powered Language Tutor. It helps with learning any language.",
        "icon": "https://cdn-icons-png.flaticon.com/128/2014/2014826.png",
        "category": "Language",
        "slug": "any-language-learn-tutor",
        "aiPrompt": "Provide assistance with learning the specified language.",
        "form": [
            {
                "label": "Language",
                "field": "input",
                "name": "language",
                "required": true
            }
        ]
    },
    {
        "name": "Communication Skill Tutor",
        "desc": "This is your AI-powered Communication Skill Tutor. It helps improve communication skills.",
        "icon": "https://cdn-icons-png.flaticon.com/128/3135/3135755.png",
        "category": "Skills",
        "slug": "communication-skill-tutor",
        "aiPrompt": "Provide assistance with improving communication skills.",
        "form": [
            {
                "label": "Skill Area",
                "field": "input",
                "name": "skill-area",
                "required": true
            }
        ]
    },
    {
        name: "Prompt Engineer",
        desc: "This is your AI-powered Prompt Engineer. It helps create and refine prompts for AI tools.",
        icon: "https://cdn-icons-png.flaticon.com/128/7069/7069912.png",
        category: "Development",
        slug: "prompt-engineer",
        aiPrompt: "Provide assistance with creating and refining prompts for AI tools.",
        form: [
            {
                "label": "Prompt Description",
                "field": "textarea",
                "name": "prompt-description",
                "required": true
            }
        ]
    },
    {
        name: 'Blog Content',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        category: 'blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/4905/4905454.png',
        slug: 'blog-content-generation',
        aiPrompt: 'Generate Blog Content based on topic and outline in rich text editor format',
        form: [
            {
                label: 'Enter your blog topic',
                field: 'input',
                name: 'topic',
                required:true
            },
            {
                label: 'Enter blog Outline here',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Blog Topic Ideas',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/11497/11497847.png',
        slug: 'blog-topic-idea',
        aiPrompt: 'Generate top 5 Blog Topic Ideas in bullet point only, (no Description) based on niche in rich text editor format',
        form: [
            {
                label: 'Enter your Niche',
                field: 'input',
                name: 'niche',
                required:true
            },
        ]
    },
    {
        name: 'Youtube SEO Title',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        category: 'Youtube Tools',
        icon: 'https://cdn-icons-png.flaticon.com/128/402/402075.png',
        slug: 'youtube-seo-title',
        aiPrompt: 'Give me Best SEO optimized high ranked 5 title ideas bullet wise only bases on keywords and outline and give me result in HTML tags format',
        form: [
            {
                label: 'Enter your youtube video topic keyowords',
                field: 'input',
                name: 'keywords',
                required:true
            },
            {
                label: 'Enter youtube description Outline here',
                field: 'textarea',
                name: 'outline'
            }
        ]

    },
    {

        name: 'Youtube Description',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        category: 'Youtube Tool',
        icon: 'https://cdn-icons-png.flaticon.com/128/2111/2111748.png',
        slug: 'youtube-description',
        aiPrompt: 'Generate Youtube description with emoji under 4-5 lines based on topic and outline in rich text editor format',
        form: [
            {
                label: 'Enter your blog topic/title',
                field: 'input',
                name: 'topic',
                required:true
            },
            {
                label: 'Enter youtube Outline here',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Youtube Tags',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        category: 'Youtube Tool',
        icon: 'https://cdn-icons-png.flaticon.com/128/4674/4674918.png',
        slug: 'youtube-tag',

        aiPrompt: 'Generate 10 Youtube tags in bullet point based on title and outline in rich text editor format',

        form: [
            {
                label: 'Enter your youtube title',
                field: 'input',
                name: 'title',
                required:true
            },
            {
                label: 'Enter youtube video Outline here (Optional)',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },

    {
        name: 'Rewrite Article (Plagiarism Free)',
        desc: 'Use this tool to rewrite existing Article or Blog Post which can bypass AI detectors and also make it plagiarism free.',
        icon: 'https://cdn-icons-png.flaticon.com/128/3131/3131607.png',
        category: 'Rewriting Tool',
        slug: 'rewrite-article',
        aiPrompt: 'Rewrite give article without any Plagiarism in rich text editor format',
        form: [
            {
                label: '🤖 Provide your Article/Blogpost or any other content to rewrite.',
                field: 'textarea',
                name: 'article',
                required:true
            }
        ]
    },
    {
        name: 'Text Improver',
        desc: 'This handy tool refines your writing, eliminating errors and redundancies for a clear, readable result. It also offers a comprehensive tone analysis and suggests better word choices.',
        icon: 'https://cdn-icons-png.flaticon.com/128/1686/1686815.png',
        category: 'Writing Assistant',
        slug: 'text-improver',
        aiPrompt: 'Given textToImprove, Rewrite text without any grammar mistake and professionally in rich text editor format',
        form: [
            {
                label: 'Enter text that you want to re-write or improve',
                field: 'textarea',
                name: 'textToImprove'
            }
        ]
    },
    {
        name: 'Add Emojis to Text',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        icon: 'https://cdn-icons-png.flaticon.com/128/2584/2584606.png',
        category: 'blog',
        slug: 'add-emoji-to-text',
        aiPrompt: 'Add Emoji to outline text depends on outline and rewrite it in rich text editor format',
        form: [
            {
                label: 'Enter your text to add emojis',
                field: 'textarea',
                name: 'outline',
                required:true
            }
        ]
    },
    {
        name: 'Instagram Post Generator',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        icon: 'https://cdn-icons-png.flaticon.com/128/15713/15713420.png',
        category: 'blog',
       
        slug: 'instagram-post-generator',
        aiPrompt: 'Generate 3 Instagram post depends on a given keywords and give output in  in rich text editor format',
        form: [
            {
                label: 'Enter Keywords for your post',
                field: 'input',
                name: 'keywords',
                required:true
            },
           
        ]
    },
    {
        name: 'Instagram Hash Tag Generator',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        icon: 'https://cdn-icons-png.flaticon.com/128/7045/7045432.png',
        category: 'blog',
       
        slug: 'instagram-hash-tag-generator',
        aiPrompt: 'Generate 15 Instagram hash tag depends on a given keywords and give output in  in rich text editor format',
        form: [
            {
                label: 'Enter Keywords for your instagram hastag',
                field: 'input',
                name: 'keywords',
                required:true
            },
           
        ]
    },
    {
        "name": "Romantic Girlfriend AI Assistant",
        "desc": "Chat with a virtual romantic partner for companionship and relationship advice.",
        "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlR65Ubb32mn5IjivvTmaRJFCNsv7IqDb72Q&s",
        "category": "Personal Relationship",
        "slug": "romantic-gf-ai-assistant",
        "aiPrompt": "Chat with your virtual romantic partner. Ask for companionship or relationship advice and gf conversation as .",
        "language": ["English"],
        "form": [
            {
                "label": "Message",
                "field": "textarea",
                "name": "message",
                "required": true
            }
        ]
    },
    {
        "name": "Crush AI Assistant",
        "desc": "Get advice on how to approach your crush or discuss topics of interest.",
        "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfgRppdpDqI238fnUPyaTbYAnnV57OjOrRnQ&s",
        "category": "Personal Relationship",
        "slug": "crush-ai-assistant",
        "aiPrompt": "Get advice on how to approach your crush or discuss topics of interest related to them , explain in romantic way with nauthy emoji.",
        "language": ["English"],
        "form": [
            {
                "label": "Message",
                "field": "textarea",
                "name": "message",
                "required": true
            }
        ]
    },
    {
        "name": "Naughty Girlfriend AI Assistant",
        "desc": "Chat with a playful virtual partner for fun conversations and light-hearted banter.",
        "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShIfZvLWo75hjHOJJTPRWfCNtsZm2yH5u67g&s",
        "category": "Personal Relationship",
        "slug": "naughty-gf-ai-assistant",
        "aiPrompt": "Engage in playful and flirtatious conversations with your virtual naughty girlfriend. naughty flirting and naughty questions to user with emoji",
        "form": [
            {
                "label": "Message",
                "field": "textarea",
                "name": "message",
                "required": true
            }
        ]
    },
    {
        "name": "Flirting Line Advisor AI Assistant",
        "desc": "Receive suggestions and tips for effective flirting lines and approaches.",
        "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS95-chBSrDIpE52ZT-r0K0AvMQgW3J4Ko2FA&s",
        "category": "Personal Relationship",
        "slug": "flirting-line-ai-assistant",
        "aiPrompt": "Receive suggestions and tips for effective flirting lines and approaches with emoji and short text example.",
        "form": [
            {
                "label": "Message",
                "field": "textarea",
                "name": "message",
                "required": true
            }
        ]
    },
    {
        "name": "Woman Psychology Secrets AI Assistant",
        "desc": "Learn insights and advice on understanding women's psychology and behavior.",
        "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSugFM0zVdg-EIxdBavShTFfpnpDMk9fmyGog&s",
        "category": "Personal Relationship",
        "slug": "woman-psychology-ai-assistant",
        "aiPrompt": "Learn insights and advice on understanding women's psychology and behavior.Every think in details and tips and tricks",
        "form": [
            {
                "label": "Message",
                "field": "textarea",
                "name": "message",
                "required": true
            }
        ]
    },
    {
        "name": "Wife Chat AI Assistant",
        "desc": "Chat with a virtual wife for discussions on relationships, family, and daily life.",
        "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5mnDtKJbX3Wohz2LGU3Ys0TIw7ajkeLUjNA&s",
        "category": "Personal Relationship",
        "slug": "wife-chat-ai-assistant",
        "aiPrompt": "Engage in conversations with your virtual wife about relationships, family, and daily life.",
        "language": ["English"],
        "form": [
            {
                "label": "Message",
                "field": "textarea",
                "name": "message",
                "required": true
            }
        ]
    },
    {
        "name": "Hacker Brother AI Assistant",
        "desc": "Get advice and tips on cybersecurity, hacking techniques, and digital privacy.",
        "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDeFqg85uFFeajxIM2FDZwSQwyQ6-SlBpOpw&s",
        "category": "Cybersecurity",
        "slug": "hacker-brother-ai-assistant",
        "aiPrompt": "Receive advice and tips on cybersecurity, hacking techniques, and digital privacy. With example ",
        "language": ["English"],
        "form": [
            {
                "label": "Message",
                "field": "textarea",
                "name": "message",
                "required": true
            }
        ]
    },
    {
        name: 'Instagram Post/Reel Idea',
        desc: 'An AI tool that generate New and trending instagram idea depends on your niche',
        icon: 'https://cdn-icons-png.flaticon.com/128/1029/1029183.png',
        category: 'instagram',
       
        slug: 'instagram-post-idea-generator',
        aiPrompt: 'Generate 5-10 Instagram idea depends on niche with latest trend and give output in  in rich text editor format',
        form: [
            {
                label: 'Enter Keywords / Niche for your instagram idea',
                field: 'input',
                name: 'keywords',
                required:true
            },
           
        ]
    },
    {
        name: 'English Grammer Check',
        desc: 'AI Model to Correct your english grammer by providing the text',
        icon:'https://cdn-icons-png.flaticon.com/128/12596/12596700.png',
        category: 'english',
       
        slug: 'english-grammer-checker',
        aiPrompt: 'Rewrite the inputText by correcting the grammer and give output in  in rich text editor format',
        form: [
            {
                label: 'Enter text to correct the grammer',
                field: 'input',
                name: 'inputText',
                required:true
            },
           
        ]
    },
    {
        name: 'Write Code',
        desc: 'AI Model to generate programming code in any language',
        icon:'https://cdn-icons-png.flaticon.com/128/6062/6062646.png',
        category: 'Coding',
       
        slug: 'write-code',
        aiPrompt: 'Depends on user codeDescription write a code and give output in  in rich text editor format in code block ',
        form: [
            {
                label: 'Enter description of code you want along with Programming Lang',
                field: 'textarea',
                name: 'codeDesscripton',
                required:true
            },
           
        ]
    },
    {
        name: 'Explain Code',
        desc: 'AI Model to explain programming code in any language',
        icon:'https://cdn-icons-png.flaticon.com/128/8488/8488751.png',
        category: 'Coding',
       
        slug: 'explain-code',
        aiPrompt: 'Depends on user codeDescription explain code line by line and give output in  in rich text editor format in code block ',
        form: [
            {
                label: 'Enter code which you want to understand',
                field: 'textarea',
                name: 'codeDesscripton',
                required:true
            },
           
        ]
    },
    {
        name: 'Code Bug Detector',
        desc: 'This tool analyzes your input, like error messages and code snippets, to pinpoint and fix bugs, offering detailed solutions and alternatives in a straightforward, user-friendly way.',
        icon:'https://cdn-icons-png.flaticon.com/128/4426/4426267.png',
        category: 'code-bug-detector',
       
        slug: 'code-bug-detector',
        aiPrompt: 'Depends on user codeInput find bug in code and give solution and give output in  in rich text editor format in code block ',
        form: [
            {
                label: 'Enter code which you want to test bug',
                field: 'textarea',
                name: 'codeInput',
                required:true
            },
           
        ]
    },
    {
        name: 'Tagline Generator',
        desc: 'Struggling to find the perfect tagline for your brand? Let our AI-tool assist you in creating a tagline that stands out.',
        icon:'https://cdn-icons-png.flaticon.com/128/2178/2178616.png',
        category: 'Marketting',
       
        slug: 'tagline-generator',
        aiPrompt: 'Depends on user productName and outline generate catchy 5-10 tagline for the business product and give output  in rich text editor format ',
        form: [
            {
                label: 'Product/Brand Name',
                field: 'input',
                name: 'productName',
                required:true
            },
            {
                label: 'What you are selling / Marketting',
                field: 'textarea',
                name: 'outline',
                required:true
            },
           
        ]
    },
    {
    "name": "Adolf Hitler AI Assistant",
    "desc": "Learn about history and Adolf Hitler's motives with responses styled as if Adolf Hitler were speaking.",
    "icon": "https://example.com/hitler-ai-icon.png",
    "category": "History",
    "slug": "hitler-ai-assistant",
    "aiPrompt": "Ask questions about history and Adolf Hitler's motives for responses styled as if Adolf Hitler were speaking.",
    "language": ["English"],
    "responses": {
        "greeting": "Greetings. What do you wish to know about my beliefs and ambitions?",
        "motives": "My goal was to restore Germany's greatness and purity, and to assert dominance over Europe.",
        "views": "I believed in the superiority of the Aryan race and the need for Lebensraum (living space) for Germans.",
        "justification": "I saw myself as the savior of Germany, leading us through turbulent times to glory.",
        "legacy": "History has judged me harshly, but my impact on Germany and the world is undeniable."
    }
},
{
        name: 'Product Description',
        desc: 'This is your AI-powered SEO expert, creating captivating and keyword-rich e-commerce product descriptions to boost your online sales.',
        icon:'https://cdn-icons-png.flaticon.com/128/679/679922.png',
        category: 'Marketting',
       
        slug: 'product-description',
        aiPrompt: 'Depends on user productName and description generate small description for product for e-commer business give output  in rich text editor format  ',
        form: [
            {
                label: 'Product Name',
                field: 'input',
                name: 'productName',
                required:true
            },
            {
                label: 'Product Details',
                field: 'textarea',
                name: 'outline',
                required:true
            },
           
        ]
    },
   



]