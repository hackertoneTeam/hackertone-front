import {visaRegisterApi} from "../../apis/visa";
import {useForm} from "react-hook-form";
import FooterLayout from "../../commons/layouts/FooterLayout";
import style from './VisaRegisterPage.module.css'
const VisaRegisterPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    visaRegister(data);
  }
  const visaRegister = (data) => {
    let formattedData = {
      name: data.name,
      place: data.place,
      trip_from: (new Date(data.trip_from)).toISOString(),
      trip_to: (new Date(data.trip_to)).toISOString(),
    }
    visaRegisterApi(formattedData).then((r) => {
      console.log(r);
    }).catch((r) => {
      console.error(r);
    })
  }
  return (
    <>
      <main>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" {...register("name", { required: true })} />
          {errors.name && <span>This field is required</span>}
          <input type="text" {...register("place", { required: true })} />
          {errors.place && <span>This field is required</span>}
          <input type="date" {...register("trip_from", { required: true })} />
          {errors.trip_from && <span>This field is required</span>}
          <input type="date" {...register("trip_to", { required: true })} />
          {errors.trip_to && <span>This field is required</span>}
          <input type="submit" value="등록하기"/>
        </form>
      </main>
      <FooterLayout />
    </>
  )
}

export default VisaRegisterPage