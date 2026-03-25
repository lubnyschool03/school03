---
layout: layouts/base.njk
title: Повідомлення відправлено!
description: Ваше повідомлення успішно отримане гімназією ПРОСВІТ.
permalink: /success/
---

<section class="min-h-[80vh] flex items-center justify-center px-4 py-16">
    <div class="max-w-lg w-full text-center">

        <!-- Animated checkmark circle -->
        <div class="flex justify-center mb-8">
            <div class="success-circle w-28 h-28 bg-gradient-to-br from-teal-400 to-primary rounded-full flex items-center justify-center shadow-2xl">
                <svg class="w-14 h-14 text-white success-check" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
                </svg>
            </div>
        </div>

        <!-- Confetti dots -->
        <div class="flex justify-center gap-2 mb-8">
            <span class="w-3 h-3 rounded-full bg-teal-400 confetti-dot" style="animation-delay:0s"></span>
            <span class="w-3 h-3 rounded-full bg-amber-400 confetti-dot" style="animation-delay:0.15s"></span>
            <span class="w-3 h-3 rounded-full bg-primary confetti-dot" style="animation-delay:0.3s"></span>
            <span class="w-3 h-3 rounded-full bg-rose-400 confetti-dot" style="animation-delay:0.45s"></span>
            <span class="w-3 h-3 rounded-full bg-violet-400 confetti-dot" style="animation-delay:0.6s"></span>
        </div>

        <h1 class="text-4xl md:text-5xl font-heading font-extrabold text-gray-900 mb-4 leading-tight">
            Дякуємо! 🎉
        </h1>
        <p class="text-lg text-gray-500 mb-10 leading-relaxed">
            Ваше повідомлення успішно отримано.<br>
            Ми зв'яжемося з вами <strong class="text-primary">найближчим часом</strong>.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/" class="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-primary to-teal-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                </svg>
                На головну
            </a>
            <a href="javascript:history.back()" class="inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-gray-200 text-gray-600 font-bold rounded-full hover:border-primary hover:text-primary transition-all duration-300">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                </svg>
                Назад
            </a>
        </div>

        <!-- Info box -->
        <div class="mt-12 bg-teal-50 border border-teal-100 rounded-2xl p-5 text-left">
            <p class="text-sm text-teal-800 flex items-start gap-3">
                <svg class="w-5 h-5 mt-0.5 flex-shrink-0 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Якщо ваше питання термінове, зателефонуйте нам: 
                <a href="tel:+380536161815" class="font-bold text-primary hover:underline ml-1">+38 (053) 616-18-15</a>
            </p>
        </div>

    </div>
</section>

<style>
.success-circle {
    animation: pop-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
}
.success-check {
    animation: draw-check 0.4s ease 0.4s both;
    stroke-dasharray: 40;
    stroke-dashoffset: 40;
}
.confetti-dot {
    animation: bounce-dot 0.6s ease 0.6s both;
    transform: scale(0);
}
@keyframes pop-in {
    0% { transform: scale(0); opacity: 0; }
    100% { transform: scale(1); opacity: 1; }
}
@keyframes draw-check {
    to { stroke-dashoffset: 0; }
}
@keyframes bounce-dot {
    0% { transform: scale(0) translateY(0); }
    60% { transform: scale(1.3) translateY(-6px); }
    100% { transform: scale(1) translateY(0); }
}
</style>
