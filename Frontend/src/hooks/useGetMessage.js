import { useEffect, useState } from 'react';
import toast from 'react-hot-toast'
import useConversation from "../store/useConversation";


const useGetMessage = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, seletedConversation } = useConversation();

    useEffect(() => {
        const getMessage = async () => {
            setLoading(true);

            try {
                const res = await fetch(`/api/messages/${seletedConversation._id}`)
                const data = await res.json();

                if (data.error) {
                    throw new Error(data.error);
                }
                setMessages(data);
            } catch (error) {
                toast.error(error.message);
            }
            finally {
                setLoading(false)
            }
        }

        if (seletedConversation?._id) getMessage();
    }, [seletedConversation?._id, setMessages])

    return { loading, messages }
}

export default useGetMessage;
