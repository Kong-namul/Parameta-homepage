import { describe, expect, it, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { ContactForm } from "./ContactForm";

beforeEach(() => {
  global.fetch = vi.fn();
});

describe("ContactForm", () => {
  it("renders all required fields", () => {
    render(<ContactForm />);
    expect(screen.getByPlaceholderText("이름 *")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("회사명 *")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("비즈니스 이메일 *")).toBeInTheDocument();
    expect(screen.getByLabelText("산업 분야")).toBeInTheDocument();
    expect(screen.getByLabelText("관심 영역")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("메시지 * (500자 이내)")).toBeInTheDocument();
  });

  it("shows success message on successful submit", async () => {
    // @ts-expect-error mock
    global.fetch.mockResolvedValueOnce({ ok: true, json: async () => ({ ok: true }) });
    render(<ContactForm />);
    // Fill required fields and submit
    fireEvent.change(screen.getByPlaceholderText("이름 *"), { target: { value: "Test" } });
    fireEvent.change(screen.getByPlaceholderText("회사명 *"), { target: { value: "Acme" } });
    fireEvent.change(screen.getByPlaceholderText("비즈니스 이메일 *"), { target: { value: "test@acme.com" } });
    fireEvent.change(screen.getByLabelText("산업 분야"), { target: { value: "financial" } });
    fireEvent.change(screen.getByLabelText("관심 영역"), { target: { value: "parasta" } });
    fireEvent.change(screen.getByPlaceholderText("메시지 * (500자 이내)"), { target: { value: "Hello" } });
    const consent = screen.getByRole("checkbox");
    fireEvent.click(consent);
    fireEvent.submit(consent.closest("form")!);
    await waitFor(() => {
      expect(screen.getByText(/접수되었습니다/)).toBeInTheDocument();
    });
  });

  it("shows error message on failed submit", async () => {
    // @ts-expect-error mock
    global.fetch.mockResolvedValueOnce({ ok: false, json: async () => ({ error: "Server error" }) });
    render(<ContactForm />);
    fireEvent.change(screen.getByPlaceholderText("이름 *"), { target: { value: "Test" } });
    fireEvent.change(screen.getByPlaceholderText("회사명 *"), { target: { value: "Acme" } });
    fireEvent.change(screen.getByPlaceholderText("비즈니스 이메일 *"), { target: { value: "test@acme.com" } });
    fireEvent.change(screen.getByLabelText("산업 분야"), { target: { value: "financial" } });
    fireEvent.change(screen.getByLabelText("관심 영역"), { target: { value: "parasta" } });
    fireEvent.change(screen.getByPlaceholderText("메시지 * (500자 이내)"), { target: { value: "Hello" } });
    const consent = screen.getByRole("checkbox");
    fireEvent.click(consent);
    fireEvent.submit(consent.closest("form")!);
    await waitFor(() => {
      expect(screen.getByText(/Server error|전송 실패/)).toBeInTheDocument();
    });
  });
});
