import { SubmitHandler, useForm } from "react-hook-form"
import { Form, FormItem, FormField, FormLabel, FormControl, FormMessage } from "./ui/form"
import { OtherFormSchema, TOtherFormSchema } from "@/schemas/OtherFormSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Textarea } from "./ui/textarea"
import { Label } from "./ui/label"
import { toast } from "sonner"
import { useEffect } from "react"

const OtherForm = () => {
  const form = useForm<TOtherFormSchema>({
    resolver: zodResolver(OtherFormSchema),
    mode: 'onChange',
  })

  const sendForm = async (data) => {
    toast.loading('Give us one second...', {
      style: {
        backgroundColor: '#965d24',
        color: 'white',
        borderRadius: 0,
        border: 0
      }
    })

    const excelUrl = "https://script.google.com/macros/s/AKfycbznOMbWhnCn5azK1c-6XbURjNifnQ1-QL5KmSRDKn-3w1jjCSDhdwCRfwjn5u8269LL/exec"

    const response = await fetch(excelUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      throw new Error("Couldn't send the form to Excel")
    }

  }

  const onSubmit: SubmitHandler<TOtherFormSchema> = async (data) => {
    let { first_name, description, phone_number, city, email, second_name, business_instagram } = data
    if (!phone_number) {
      data.phone_number = ''
    }

    if (!description) {
      data.description = ''
    }
    await sendForm(data)

    window.localStorage.setItem("form_submitted", 'true')

    setTimeout(() => {
      window.location.href = "/";
    }, 100);
  }
  return (
    <main className=" min-h-screen flex flex-col justify-center items-center w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full max-w-xl">
          <div className="flex flex-col md:flex-row items-center gap-4 w-full justify-between">
            <FormField name='first_name' render={({ field }) => (
              <FormItem>
                <Label className="text-[#737373]">First name <span className="text-red-500">*</span></Label>
                <FormControl>
                  <Input placeholder="Carlos" {...field} className="border-[#965d24] rounded-none" />
                </FormControl>

              </FormItem>
            )} />


            <FormField name='second_name' render={({ field }) => (
              <FormItem>
                <Label className="text-[#737373]">Second name<span className="text-red-500">*</span></Label>
                <FormControl>
                  <Input placeholder="Andres" {...field} className="border-[#965d24] rounded-none" />
                </FormControl>

              </FormItem>
            )} />


          </div>

          <FormField name='email' render={({ field }) => (
            <FormItem>
              <Label className="text-[#737373]">Email<span className="text-red-500">*</span></Label>
              <FormControl>
                <Input placeholder="dummyemail123@gmail.com" {...field} className="border-[#965d24] rounded-none" />
              </FormControl>

            </FormItem>
          )} />

          <FormField name='business_instagram' render={({ field }) => (
            <FormItem>
              <Label className="text-[#737373]">Instagram user<span className="text-red-500">*</span></Label>
              <div className="flex flex-col relative">
                <p className="absolute top-[5px] left-3 text-[#737373]">@</p>
                <FormControl>
                  <Input placeholder="user123" {...field} className="border-[#965d24] rounded-none pl-8" />
                </FormControl>
              </div>
            </FormItem>
          )} />

          <FormField name='phone_number' render={({ field }) => (
            <FormItem>
              <Label className="text-[#737373]">Phone number</Label>
              <FormControl>
                <Input placeholder="(416)555-3456" {...field} className="border-[#965d24] rounded-none" />
              </FormControl>

            </FormItem>
          )} />

          <FormField name='city' render={({ field }) => (
            <FormItem>
              <Label className="text-[#737373]">City<span className="text-red-500">*</span></Label>
              <FormControl>
                <Input placeholder="Missouri" {...field} className="border-[#965d24] rounded-none" />
              </FormControl>

            </FormItem>
          )} />

          <FormField name='description' render={({ field }) => (
            <FormItem>
              <Label className="text-[#737373]">Description</Label>
              <FormControl>
                <Textarea {...field} className="border-[#965d24] rounded-none" />
              </FormControl>

            </FormItem>
          )} />

          <Button type="submit" className="bg-[#965d24] hover:bg-[#dfb968] p-4 rounded-none w-full font-bold uppercase text-sm cursor-pointer">Submit</Button>
        </form>
      </Form>
    </main>
  )
}

export default OtherForm
