import { useState } from "react"
import './styles.css'

export const ChatBox=()=>{
    const [chat,setChat]=useState([])
    const [inputVal,setInput]=useState('')

    const ArrowVector=()=>{
        return(
            <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.2333 12.3666V1.43331C6.2333 1.05553 6.3613 0.739087 6.6173 0.483976C6.8733 0.228865 7.18975 0.100864 7.56663 0.0999756C7.94441 0.0999756 8.2613 0.227976 8.5173 0.483976C8.7733 0.739976 8.90086 1.05642 8.89997 1.43331V12.3666L12.7666 8.49998C13.0111 8.25553 13.3222 8.13331 13.7 8.13331C14.0777 8.13331 14.3889 8.25553 14.6333 8.49998C14.8777 8.74442 15 9.05553 15 9.43331C15 9.81109 14.8777 10.1222 14.6333 10.3666L8.49997 16.5C8.2333 16.7666 7.92219 16.9 7.56663 16.9C7.21108 16.9 6.89997 16.7666 6.6333 16.5L0.499967 10.3666C0.255522 10.1222 0.133301 9.81109 0.133301 9.43331C0.133301 9.05553 0.255522 8.74442 0.499967 8.49998C0.744411 8.25553 1.05552 8.13331 1.4333 8.13331C1.81108 8.13331 2.12219 8.25553 2.36663 8.49998L6.2333 12.3666Z" fill="#666D80"/>
            </svg>
        )
    }

    const ReGenerateVector=()=>{
        return(
            <svg width="20" height="29" viewBox="0 0 20 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 4.31812V0.5L5 5.59088L10 10.6819V6.86356C14.1248 6.86356 17.5 10.2999 17.5 14.5C17.5 15.7727 17.1875 16.9821 16.6248 18.0635L18.4375 19.9092C19.4373 18.3181 20 16.4724 20 14.5C20 8.90006 15.4999 4.31812 10 4.31812ZM10 22.1365C5.87494 22.1365 2.5 18.6997 2.5 14.5C2.5 13.2273 2.8125 12.0182 3.37494 10.9362L1.5625 9.09087C0.562438 10.6181 0 12.5273 0 14.5C0 20.0999 4.50012 24.6819 10 24.6819V28.5L15 23.4092L10 18.3181V22.1365Z" fill="white"/>
            </svg>
        )
    }

    const pushChat=()=>{
        const chatObj={
            user:'user1',
            msg:inputVal
        }
        setInput('')
        setChat((pre)=>[...pre,chatObj])
        setTimeout(()=>{sendAIResponse()},1000)
    }

    const sendAIResponse=()=>{
        const chatObj={
            user:'AI',
            msg:"Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask."
        }
        setChat((pre)=>[...pre,chatObj])
    }
    
    return(
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>    
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">     
            <div className="relative transform p-6 overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full chat-box-wrapper">
            <div>
                <ul className="list-none">
                    {chat?.map((data,i)=>{
                        return(
                            <li key={i} className={`${data.user==="user1"?"user-reply text-right":"ai-reply"} text-2xl p-4 mb-6 chat-container rounded-xl`}>{data?.msg}</li>
                        )
                    })}
                </ul>
            </div>    
              <input 
                type="text" 
                className="block w-full rounded-xl text-2xl border-0 px-4 py-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6 mb-6 input-chatbox" 
                placeholder="Your Prompt"
                value={inputVal}
                onChange={(e)=>setInput(e.target.value)}
            />
            <div className="flex justify-end gap-[26px]">
                {chat?.length>0 &&
                    <button className="flex items-center gap-[10px] font-semibold px-6 py-3 border-2 border-gray-500 text-gray-500 insert-btn rounded-lg bg-transparent">
                        <ArrowVector />Insert
                    </button>
                }
                <button 
                    className="flex gap-[10px] items-center bg-[#3B82F6] text-white px-6 py-3 text-2xl font-semibold border-0 regenerate-btn rounded-lg"
                    onClick={pushChat}
                    disabled={(inputVal?.length && !chat?.length) ? false : true}
                >
                    {chat?.length ? 
                    <>
                        <ReGenerateVector/>
                        Regenerate
                    </>
                        : 'Generate'
                    }
                </button>
            </div>
            </div>
            </div>
            </div>
            </div>
           
    )
}