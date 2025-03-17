import "./MoodTracker.css";
import { moods } from "./moods";
import { useState } from "react";

export default function MoodTracker() {
  const [moodLog, setMoodLog] = useState([]);

  function addMood(selectedMood) {
    const today = new Date().toISOString().split("T")[0];
    if (moodLog.some((entry) => entry.date === today)) {
      alert("You have already logged a mood for today!");
      return;
    }
    setMoodLog([...moodLog, { mood: selectedMood, date: today }]);
  }

  function deleteLog() {
    setMoodLog([]);
  }

  return (
    <section className="main_container">
      <h1>Mood Tracker</h1>

      <h2>How do you feel today?</h2>

      <div className="moods_list">
        {moods.map((mood) => {
          return (
            <div className="mood_item" key={mood.id}>
              <button onClick={() => addMood(mood.type)}>
                {mood.type.toUpperCase()}
              </button>{" "}
              - <em>{mood.explanation}</em>
            </div>
          );
        })}
      </div>

      <div className="history_container">
        {moodLog.length !== 0 && (
          <>
            <h2 className="history_title">Your history:</h2>
            <ul>
              {moodLog.map((moodItem, index) => {
                return (
                  <li key={index}>
                    In {moodItem.date} I was{" "}
                    <b>{moodItem.mood.toUpperCase()}</b>.
                  </li>
                );
              })}
            </ul>
            <button className="delete_button" onClick={deleteLog}>
              Clear
            </button>
          </>
        )}
      </div>
    </section>
  );
}
