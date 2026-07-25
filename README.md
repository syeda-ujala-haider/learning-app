# React Learning Practice - Food Order Form

A React application demonstrating form handling, state management, and event handling. Built as part of a summer full-stack development project.

## 📋 Project Overview

This is a practice project to learn React fundamentals including:
- **Components** - Reusable UI building blocks
- **State Management** - Using `useState` hook
- **Event Handling** - Capturing user input
- **Controlled Components** - Managing form inputs with state
- **Conditional Rendering** - Displaying content based on state

## 🎯 What It Does

A simple food order form where users can:
1. Enter their name
2. Select quantity
3. Add delivery instructions
4. Choose payment method (Visa, Mastercard, Giftcard)
5. Select shipping method (Pick Up or Delivery)
6. All inputs are validated and displayed in real-time

## 📁 Project Structure

```
learning-app/
├── src/
│   ├── components/
│   │   ├── MYCOMPONENT.jsx          (Main form component)
│   │   ├── MYCOMPONENT.css          (Form styling)
│   │   ├── Card.jsx                 (Profile card)
│   │   ├── Button.jsx               (Button practice)
│   │   ├── Profile.jsx              (Image with onClick)
│   │   └── Header.jsx               (Header component)
│   ├── assets/
│   │   └── pic.jpg                  (Profile image)
│   ├── App.jsx                      (Main app component)
│   ├── main.jsx                     (Entry point)
│   └── index.css                    (Global styles)
├── package.json
├── vite.config.js
└── README.md
```

## 🛠️ Tech Stack

- **React** - UI library
- **Vite** - Build tool (fast development)
- **CSS3** - Styling
- **JavaScript ES6+** - Modern JavaScript

## 📚 React Concepts Learned

### 1. **Components**
- Functional components (functions that return JSX)
- Component reusability
- Component composition

### 2. **State Management**
```javascript
const [name, setName] = useState("Guest")
```
- Using `useState` hook to manage component state
- Updating state with setter functions

### 3. **Event Handling**
- `onChange` - Triggered when input value changes
- `onClick` - Triggered when element is clicked
- Arrow functions with event handlers

### 4. **Controlled Components**
- Form inputs controlled by React state
- Real-time updates as user types

### 5. **JSX**
- Writing HTML-like syntax in JavaScript
- Interpolating JavaScript expressions `{variable}`
- Conditional rendering with ternary operators

## 🚀 How to Run

### Prerequisites
- Node.js v24.18.0 or higher
- npm v11.16.0 or higher

### Installation & Running

1. Clone the repository:
```bash
git clone https://github.com/syeda-ujala-haider/learning-app.git
cd learning-app
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open browser and go to:
```
http://localhost:5173/
```

## 💡 Key Learnings

### Form Handling
- Every input type needs its own state variable
- Use `value={state}` to bind input to state
- Use `onChange={handler}` to capture changes

### Event Handlers
```javascript
function handleNameChange(event) {
    setName(event.target.value)
}
```

### Radio Buttons
- Multiple radio buttons share one state variable
- Use `checked={state === "value"}` to control selection
- All radio buttons update the same state

### Dropdowns/Select
```javascript
<select value={payment} onChange={handlePaymentChange}>
    <option value="">Select option</option>
    <option value="Visa">Visa</option>
</select>
```

### Textarea
```javascript
<textarea value={comment} onChange={handleCommentChange}></textarea>
```

## 📊 Learning Progress

**Week 3 (July 8-15, 2026):**
- ✅ React tutorial for beginners
- ✅ Props in React
- ✅ Conditional rendering
- ✅ Render lists (.map)
- ✅ Click events
- ✅ onChange events
- ✅ useState hook
- ✅ Built food order form

**Components Built:**
- ✅ Card component (profile)
- ✅ Button component (click events)
- ✅ Profile component (image handling)
- ✅ Food order form (complex form with multiple inputs)

## 🔗 Related Projects

**FlyRank ML Internship:**
- Repository: https://github.com/syeda-ujala-haider/FlyRANK-Machine-Learning-Internship

**Learning Recommendation System (Main Project):**
- Repository: https://github.com/syeda-ujala-haider/learning-recommendation-system

## 📈 Next Steps

1. **Week 4-5 (July 16-29):**
   - Integrate with FastAPI backend
   - Connect form to database
   - Build recommendation engine

2. **Week 7 (July 30 - Aug 5):**
   - Deploy to Vercel
   - Deploy backend to Railway
   - Live application

## 🎓 What I Learned

- React is all about **state** and **components**
- Form handling requires careful state management
- `onChange` is essential for controlled components
- React re-renders when state changes (automatic)
- Keep components small and focused on one thing

## 📚 Resources

- **Bro Code React Tutorial:** https://www.youtube.com/watch?v=Dorf8i6lodo
- **React Official Docs:** https://react.dev
- **Vite Documentation:** https://vitejs.dev

## 🤝 Author

**Ujala Haider**
- CS Student, University of Agriculture Faisalabad
- Semester 4, pursuing ML Engineering track
- Summer 2026 Full-Stack Development Project

## 📝 Notes

- This is a learning project, not production-ready code
- Code is intentionally simple to demonstrate concepts clearly
- Next phase: Connect this form to a real backend API
- Focus: Understanding React fundamentals before optimization

---

**Last Updated:** July 15, 2026  
**Status:** ✅ React fundamentals complete, ready for backend integration  
**Next Update:** July 30, 2026 (after backend integration)
