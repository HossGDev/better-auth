import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface ResetPasswordProps {
  name: string;
  url: string;
}

export function ResetPassword({ name, url }: ResetPasswordProps) {
  return (
    <Html lang="en">
      <Head />
      <Preview>Reset your password</Preview>
      <Body style={{ backgroundColor: "#f8fafc", fontFamily: "sans-serif" }}>
        <Container
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "12px",
            border: "1px solid #e2e8f0",
            overflow: "hidden",
            maxWidth: "520px",
            margin: "2rem auto",
          }}
        >
          <Section
            style={{
              backgroundColor: "#0f172a",
              padding: "2rem",
              textAlign: "center",
            }}
          >
            <Text
              style={{
                color: "#ffffff",
                fontSize: "20px",
                fontWeight: "600",
                margin: "0",
              }}
            >
              YourApp
            </Text>
          </Section>
          <Section style={{ padding: "2rem 2.5rem" }}>
            <Text
              style={{ fontSize: "18px", fontWeight: "600", color: "#0f172a" }}
            >
              Reset your password
            </Text>
            <Text
              style={{ fontSize: "15px", color: "#64748b", lineHeight: "1.7" }}
            >
              Hi {name}, click the button below to reset your password.
            </Text>
            <Section style={{ textAlign: "center", margin: "2rem 0" }}>
              <Button
                href={url}
                style={{
                  backgroundColor: "#0f172a",
                  color: "#ffffff",
                  padding: "12px 32px",
                  borderRadius: "8px",
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                Reset password
              </Button>
            </Section>
            <Text
              style={{ fontSize: "13px", color: "#94a3b8", lineHeight: "1.7" }}
            >
              If the button doesn't work, copy and paste this link into your
              browser:
            </Text>
            <Link
              href={url}
              style={{
                fontSize: "13px",
                color: "#64748b",
                wordBreak: "break-all",
              }}
            >
              {url}
            </Link>
            <Hr style={{ borderColor: "#e2e8f0", margin: "1.5rem 0" }} />
            <Text style={{ fontSize: "13px", color: "#94a3b8" }}>
              If you didn't request a password reset, you can safely ignore this
              email.
            </Text>
          </Section>
          <Section
            style={{
              backgroundColor: "#f8fafc",
              padding: "1.25rem 2.5rem",
              textAlign: "center",
              borderTop: "1px solid #e2e8f0",
            }}
          >
            <Text style={{ fontSize: "12px", color: "#94a3b8" }}>
              © 2026 YourApp
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
