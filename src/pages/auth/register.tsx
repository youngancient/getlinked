import { DottedLine, Tick } from "@/components/Icons/Icons";
import { LargeBtnStyle } from "@/styles/ComponentStyles/Buttons";
import { CheckBox } from "@/styles/ComponentStyles/Icons";
import {
  ErrorStyles,
  SmallTextStyles,
  SmallerTextStyles,
} from "@/styles/ComponentStyles/Text";
import {
  ButtonLoader,
  RegisterStyles,
} from "@/styles/PageStyles/auth/Register";
import Head from "next/head";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { RegisterImgVariants, textVariant } from "@/animations/animations";
import { DropdownA, DropdownB, Success } from "@/components/Auth/Register";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../constants/libs";
import { GroupSizes, IGroupSize } from "../../../constants/GroupSize";
import { useRouter } from "next/router";

interface IForm {
  teamName: string;
  phone: string;
  email: string;
  topic: string;
  isAgreed: boolean;
  category: number | null;
  groupSize: number | null;
}
const Register = () => {
  const {
    register,
    reset,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    mode: "onBlur",
    defaultValues: {
      teamName: "",
      phone: "",
      email: "",
      topic: "",
      isAgreed: false,
      category: null,
      groupSize: null,
    },
  });
  const [isLoading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isAgree, setIsAgree] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [categories, setCategories] = useState<ICategory[] | null>(null);
  const [groupSizes, setGroupSizes] = useState<IGroupSize[]>(GroupSizes);
  const router = useRouter();
  const handleRegister = async (formData: IForm) => {
    // console.log(formData);
    if (formData.groupSize !== null && formData.category !== null) {
      try {
        setLoading(true);
        const { data } = await axios.post(
          `${BASE_URL}/hackathon/registration`,
          {
            email: formData.email,
            phone_number: formData.phone,
            team_name: formData.teamName,
            group_size: formData.groupSize,
            project_topic: formData.topic,
            category: formData.category,
            privacy_poclicy_accepted: true,
          }
        );
        if (data) {
          setLoading(false);
          setIsSuccess(true);
          reset();
        }
      } catch (error: any) {
        setLoading(false);
        const message = error.response && error.response.data.email;
        setErrorMsg(message[0]);
      }
    }
  };

  const cancel = () => {
    router.push("/");
  };

  const handleAgree = () => {
    setIsAgree(!isAgree);
  };

  useEffect(() => {
    axios
      .get(`${BASE_URL}/hackathon/categories-list`)
      .then((res) => {
        const newCategories: ICategory[] = res.data.map((ele: TCategory) => {
          return { ...ele, isSelected: false };
        });
        setCategories(newCategories);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    setValue("isAgreed", isAgree);
  }, [isAgree]);

  useEffect(() => {
    const selectedSize = groupSizes?.find((ele) => ele.isSelected === true);
    const selectedCategory = categories?.find((ele) => ele.isSelected === true);
    if (selectedSize) {
      setValue("groupSize", parseInt(selectedSize.num));
    }
    if (selectedCategory) {
      setValue("category", parseInt(selectedCategory.id));
    }
  }, [categories, groupSizes]);

  return (
    <>
      <Head>
        <title>Register</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <AnimatePresence>
          {isSuccess && <Success handleClose={cancel} key="kagura" />}
        </AnimatePresence>
        <RegisterStyles>
          <div className="one">
            <h3>Register</h3>
            <div className="absolute-div">
              <Image
                alt="purple"
                src="/assets/purple.png"
                height={300}
                width={300}
                sizes="100vw"
                className="purple"
              />
            </div>
            <motion.div
              className="img"
              initial="initial"
              whileInView="final"
              variants={RegisterImgVariants}
            >
              <Image
                src="/assets/thumbsup.png"
                alt="thumbs up"
                width={717}
                height={717}
              />
            </motion.div>
          </div>
          <div className="two">
            <h3>Register</h3>
            <div className="text">
              <SmallTextStyles>Be part of this movement!</SmallTextStyles>
              <div className="move">
                <Image
                  src="/assets/man_walking.svg"
                  alt="man walking"
                  width={26}
                  height={26}
                  className="man"
                />
                <Image
                  src="/assets/woman_walking.svg"
                  alt="woman walking"
                  width={26}
                  height={26}
                  className="woman"
                />
                <DottedLine />
              </div>
            </div>
            <div className="h">
              <h4>CREATE YOUR ACCOUNT</h4>
              {errorMsg && <ErrorStyles>{errorMsg}</ErrorStyles>}
            </div>
            <form onSubmit={handleSubmit(handleRegister)}>
              <div className="inner">
                <motion.div
                  className="form-ele"
                  initial="initial"
                  whileInView="final"
                  variants={textVariant}
                >
                  <label htmlFor="name">
                    <SmallTextStyles>Team&rsquo;s Name</SmallTextStyles>
                  </label>
                  <input
                    type="text"
                    {...register("teamName", { required: "Name is required" })}
                    id=""
                    placeholder="Enter the name of your group"
                  />

                  {errors?.teamName && (
                    <ErrorStyles className="down">
                      {" "}
                      {errors.teamName.message}
                    </ErrorStyles>
                  )}
                </motion.div>
                <motion.div
                  className="form-ele"
                  initial="initial"
                  whileInView="final2"
                  variants={textVariant}
                >
                  <label htmlFor="phone">
                    <SmallTextStyles>Phone</SmallTextStyles>
                  </label>
                  <input
                    type="number"
                    {...register("phone", {
                      required: "Phone is required",
                      minLength: {
                        value: 11,
                        message: "11 digits minimum",
                      },
                    })}
                    id=""
                    placeholder="Enter your phone number"
                  />

                  {errors?.phone && (
                    <ErrorStyles className="down">
                      {" "}
                      {errors.phone.message}{" "}
                    </ErrorStyles>
                  )}
                </motion.div>
              </div>
              <div className="inner">
                <motion.div
                  className="form-ele"
                  initial="initial"
                  whileInView="final"
                  variants={textVariant}
                >
                  <label htmlFor="email">
                    <SmallTextStyles>Email</SmallTextStyles>
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: "Email is required" })}
                    id=""
                    placeholder="Enter your email address"
                  />

                  {errors?.email && (
                    <ErrorStyles className="down">
                      {" "}
                      {errors.email.message}{" "}
                    </ErrorStyles>
                  )}
                </motion.div>
                <motion.div
                  className="form-ele"
                  initial="initial"
                  whileInView="final2"
                  variants={textVariant}
                >
                  <label htmlFor="topic">
                    <SmallTextStyles>Project Topic</SmallTextStyles>
                  </label>
                  <input
                    type="text"
                    {...register("topic", { required: "Topic is required" })}
                    id=""
                    placeholder="What is your group project topic"
                  />

                  {errors?.topic && (
                    <ErrorStyles className="down">
                      {" "}
                      {errors.topic.message}{" "}
                    </ErrorStyles>
                  )}
                </motion.div>
              </div>
              <div className="inner xx">
                <motion.div
                  className="form-ele"
                  initial="initial"
                  whileInView="final"
                  variants={textVariant}
                >
                  <SmallTextStyles>Category</SmallTextStyles>
                  <DropdownA
                    placeholder="Select your category"
                    stateValue={categories}
                    setCategories={setCategories}
                  />
                </motion.div>
                <motion.div
                  className="form-ele"
                  initial="initial"
                  whileInView="final2"
                  variants={textVariant}
                >
                  <SmallTextStyles>Group Size</SmallTextStyles>
                  <DropdownB
                    placeholder="Select"
                    stateValue={groupSizes}
                    setGroupSize={setGroupSizes}
                  />
                </motion.div>
              </div>
              <div className="bottom">
                <SmallerTextStyles className="italize">
                  <strong>
                    Please review your registration details before submitting
                  </strong>
                </SmallerTextStyles>
                <div className="check">
                  <CheckBox onClick={handleAgree}>
                    {isAgree && <Tick />}
                  </CheckBox>
                  <SmallTextStyles>
                    I agreed with the event terms and conditions and privacy
                    policy
                  </SmallTextStyles>
                </div>
                <div className="btn">
                  <LargeBtnStyle disabled={!isAgree}>
                    {isLoading ? <ButtonLoader /> : "Register Now"}
                  </LargeBtnStyle>
                </div>
              </div>
            </form>
          </div>
        </RegisterStyles>
      </main>
    </>
  );
};

export default Register;
