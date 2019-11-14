import React from "react";
import Chart from "chart.js";
import employeeProfilePayload from "../../mockData/employeeProfile";

const renderChart = (id, account, initiative, comparing) => {
  let canvas = document.getElementById(id);

  let gradientBlue = canvas.getContext("2d").createLinearGradient(0, 0, 0, 150);
  gradientBlue.addColorStop(0, "rgba(85, 85, 255, 0.9)");
  gradientBlue.addColorStop(1, "rgba(151, 135, 255, 0.8)");

  let gradientHoverBlue = canvas
    .getContext("2d")
    .createLinearGradient(0, 0, 0, 150);
  gradientHoverBlue.addColorStop(0, "rgba(65, 65, 255, 1)");
  gradientHoverBlue.addColorStop(1, "rgba(131, 125, 255, 1)");

  let gradientRed = canvas.getContext("2d").createLinearGradient(0, 0, 0, 150);
  gradientRed.addColorStop(0, "rgba(255, 85, 184, 0.9)");
  gradientRed.addColorStop(1, "rgba(255, 135, 135, 0.8)");

  let gradientHoverRed = canvas
    .getContext("2d")
    .createLinearGradient(0, 0, 0, 150);
  gradientHoverRed.addColorStop(0, "rgba(255, 65, 164, 1)");
  gradientHoverRed.addColorStop(1, "rgba(255, 115, 115, 1)");

  let redArea = null;
  let blueArea = null;

  let shadowed = {
    beforeDatasetsDraw: function(chart, options) {
      chart.ctx.shadowColor = "rgba(0, 0, 0, 0.25)";
      chart.ctx.shadowBlur = 40;
    },
    afterDatasetsDraw: function(chart, options) {
      chart.ctx.shadowColor = "rgba(0, 0, 0, 0)";
      chart.ctx.shadowBlur = 0;
    }
  };

  Chart.plugins.register({
    afterEvent: function(chart, e) {
      // Hardcoded hover areas

      // Red chart
      chart.ctx.beginPath();
      chart.ctx.moveTo(91, 69);
      chart.ctx.lineTo(152, 80);
      chart.ctx.lineTo(192, 75);
      chart.ctx.lineTo(213, 138);
      chart.ctx.lineTo(148, 168);
      chart.ctx.lineTo(105, 126);
      chart.ctx.fill();
      chart.ctx.closePath();

      if (chart.ctx.isPointInPath(e.x, e.y)) {
        let dataset = window.chart.data.datasets[0];
        dataset.backgroundColor = gradientHoverRed;
        window.chart.update();
        canvas.style.cursor = "pointer";
      } else {
        let dataset = window.chart.data.datasets[0];
        dataset.backgroundColor = gradientRed;
        window.chart.update();
        canvas.style.cursor = "default";
      }

      // Blue chart
      chart.ctx.beginPath();
      chart.ctx.moveTo(85, 61);
      chart.ctx.lineTo(149, 66);
      chart.ctx.lineTo(224, 63);
      chart.ctx.lineTo(179, 112);
      chart.ctx.lineTo(152, 177);
      chart.ctx.lineTo(121, 117);
      chart.ctx.fill();
      chart.ctx.closePath();

      if (chart.ctx.isPointInPath(e.x, e.y)) {
        let dataset = window.chart.data.datasets[1];
        dataset.backgroundColor = gradientHoverBlue;
        window.chart.update();
        canvas.style.cursor = "pointer";
      } else {
        let dataset = window.chart.data.datasets[1];
        dataset.backgroundColor = gradientBlue;
        window.chart.update();
        canvas.style.cursor = "default";
      }
    }
  });

  console.log('stufffffff');

  console.log(account);
  console.log(initiative);

  const employeeSkills = account ? account.skills.map(skill => skill.level * 10) : [];
  const initiativeDesiredSkills = initiative ? initiative.skills.map(skill => skill.level * 10) : [];



  window.chart = new Chart(document.getElementById(id), {
    type: "radar",
    data: {
      labels: employeeProfilePayload.skills,
      datasets: [
        {
          label: "Donté Panlin",
          data: employeeSkills,
          fill: true,
          backgroundColor: gradientRed,
          borderColor: "transparent",
          pointBackgroundColor: "transparent",
          pointBorderColor: "transparent",
          pointHoverBackgroundColor: "transparent",
          pointHoverBorderColor: "transparent",
          pointHitRadius: 50
        },
        {
          label: "Mireska Sunbreeze",
          data: comparing ? initiativeDesiredSkills : [],
          fill: true,
          backgroundColor: gradientBlue,
          borderColor: "transparent",
          pointBackgroundColor: "transparent",
          pointBorderColor: "transparent",
          pointHoverBackgroundColor: "transparent",
          pointHoverBorderColor: "transparent",
          pointHitRadius: 50
        }
      ]
    },
    options: {
      legend: {
        display: false
      },
      tooltips: {
        enabled: false,
        custom: function(tooltip) {
        }
      },
      gridLines: {
        display: false
      },
      scale: {
        ticks: {
          maxTicksLimit: 1,
          display: false
        }
      }
    },
    plugins: [shadowed]
  });
};

export default renderChart;
