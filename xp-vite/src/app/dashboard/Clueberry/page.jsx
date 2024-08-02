import "./style.scss"
import { useState } from "react"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { getFormsData } from "@/utils/api"
import { toast } from "react-toastify"
import { createProfileHandler } from "@/utils/api"
import FormDataComponent from "@/components/ui/FormData"

const CustomerprofileDashboardPage = () => {

    const [data, setData] = useState(null)
    const { register, handleSubmit, reset } = useForm({});

    async function getData() {
        try {
            const res = await getFormsData()
            if (res.data.success) {
                const getform = res.data.data.customer_create_profile_form
                setData(getform)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }


    useEffect(() => {
        getData()
    }, [])

    if (!data) {
        return <p>Loading....</p>
    }

    const onSubmit = async (data) => {
        try {
            const createProfile = await createProfileHandler(data)
            if (createProfile.data.success) {
                toast.success("Profile created Succesfully")
                reset()
            }
            else {
                toast.error(createProfile.data.data)
            }
        } catch (error) {
            console.log(error.message);
            toast.error(error.message)
        }
    }

    return (
        <div className="CustomerProfilePage">
            <div className="header">
                <div className="title">
                    <h3>
                        EASIEST WAY TO <br />
                        CREATE A CUSTOMER PROFILE
                    </h3>
                </div>
            </div>
            <form className="userProfile" onSubmit={handleSubmit(onSubmit)}>
                <div className="wrapper">
                    <FormDataComponent register={register} formData={data} />
                </div>
                <div className="buttons">
                    <button type="submit">Update</button>
                </div>
            </form>
        </div>
    )
}

export default CustomerprofileDashboardPage