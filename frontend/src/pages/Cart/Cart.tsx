import { useEffect, useState } from "react"
import type { IKorb } from "../../interface/Interface"
import { useAppDispatch } from "../../store/hook"
import { clearBaskit, removeBasket } from "../../store/reduxBasket/ReduxBasket"

export const Cart =() => {

    const [corbItem, setCorbItem] = useState<IKorb[]>([])

    useEffect(() => {
        const itemFromLocal = localStorage.getItem("corb")
        if(itemFromLocal) setCorbItem(JSON.parse(itemFromLocal))
    }, [])

    const DetItem = (id: string) => {
        const newRes = corbItem.filter(item => item.id !== id)
        setCorbItem(newRes)
        localStorage.setItem("corb",JSON.stringify(newRes))
    }

    const totalDelete = () => {
        localStorage.removeItem("corb")
        setCorbItem([])
    }


    const dispatch = useAppDispatch()

    return(
        <div>
            {corbItem.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div>
                    <div>
                        {corbItem.map(item => 
                            <div key={item.id}>
                                <div>

                                    <div>
                                        <img src={item.img} alt="" />
                                    </div>

                                    <div>
                                        <p>{item.name}</p>
                                        <p>{item.price}</p>
                                    </div>

                                </div>

                                <div>
                                    <button>Buy Now</button>
                                    <button onClick={() => {DetItem(item.id); dispatch(removeBasket(item.id))}}>Remove</button>
                                </div>

                            </div>
                        )}
                    </div>

                    <div>
                        <button onClick={() => {totalDelete; dispatch(clearBaskit())}}>Clear All</button>
                    </div>

                </div>
            )
            }

        </div>
    )
}