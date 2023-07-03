import React from 'react';
import GitHubCalendar from 'react-github-calendar';

const MyGitHubCalendar = () => {
  const selectLastHalfYear = contributions => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 6;

    return contributions.filter(activity => {
      const date = new Date(activity.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };

  const transformData = data => {
    // Modify or process the data as needed
    return data;
  };

  return (
    <div className="flex justify-center">
      <GitHubCalendar
        username="Rahatul99"
        transformData={transformData}
        hideColorLegend
        hideTotalCount
      />
    </div>
  );
};

export default MyGitHubCalendar;
