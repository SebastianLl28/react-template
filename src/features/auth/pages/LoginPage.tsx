import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormInput } from "@/shared/components/form/FormInput";
import { Button } from "@/shared/components/ui/button";
import { Form } from "@/shared/components/ui/form";
import { loginSchema, type LoginSchema } from "../schemas/login.schema";
import { usePostLogin } from "../hooks/mutations";

export default function LoginPage() {
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const { mutate: login } = usePostLogin();

  const onSubmit = (values: LoginSchema) => {
    login(values);
  };

  return (
    <section className="bg-muted grid place-items-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="min-w-sm bg-background w-full max-w-sm space-y-4 rounded-md border px-6 py-8 shadow-md"
        >
          <FormInput control={form.control} name="username" label="Email" />
          <FormInput control={form.control} name="password" label="Password" />
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </Form>
    </section>
  );
}
