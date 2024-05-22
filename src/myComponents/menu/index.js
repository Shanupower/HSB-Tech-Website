import { Button, Drawer, Space } from "antd";
import { useState } from "react";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import hsbLogo from "../../assets/hsb-logo.png";
import { Link } from "react-router-dom";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useMediaQuery } from "@mui/material";
const items = [
  {
    key: "What We Do",
    label: "What We Do",
    icon: (
      <img
        style={{ width: "20px", height: "20px" }}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhnL362W89--dfHtQ8A5r26VOXewXggu3CUxw2zqtGEQ&s"
        alt=""
      />
    ),
    children: [
      // {
      //   key: "1",
      //   label: (
      //     <Link style={{ textDecoration: "none" }} to="/services">
      //       Services
      //     </Link>
      //   ),
      // },
      {
        key: "2",
        label: (
          <Link
            style={{ textDecoration: "none" }}
            to="/services/web development"
          >
            Web Development
          </Link>
        ),
      },
      {
        key: "3",
        label: (
          <Link
            style={{ textDecoration: "none" }}
            to="/services/mobile development"
          >
            Mobile Development
          </Link>
        ),
      },

      {
        key: "5",
        label: (
          <Link
            style={{ textDecoration: "none" }}
            to="/services/uiux development"
          >
            UI UX Design
          </Link>
        ),
      },
      {
        key: "6",
        label: (
          <Link
            style={{ textDecoration: "none" }}
            to="/services/fullstack development"
          >
            Full Stack Development
          </Link>
        ),
      },
      {
        key: "4",
        label: (
          <Link
            style={{ textDecoration: "none" }}
            to="/services/quality assurance"
          >
            Quality Assurance & Software Testing
          </Link>
        ),
      },

      {
        key: "7",
        label: (
          <Link
            style={{ textDecoration: "none" }}
            to="/services/busines analysis services"
          >
            Business Analysis & Consulting
          </Link>
        ),
      },
    ],
  },
  {
    key: "Industries",
    label: "Industries ",
    icon: (
      <img
        style={{ width: "20px", height: "20px" }}
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAACUCAMAAAA02EJtAAAAY1BMVEX///8AAACAgIDBwcEpKSnIyMiPj4/5+fnr6+sdHR15eXnl5eVFRUUhISFOTk729vbX19c/Pz/d3d20tLQQEBA6OjqVlZViYmJoaGg0NDTPz89YWFhzc3MWFhahoaFubm6rq6sw+q55AAALMElEQVR4nO2cbRuqLAyAy/fU0tSstKz//yuf3ABhgmKnkz3XdfYlQ8FbGGMMdLP5J2tJ7ttL/kb5hfvK2HwE9bFdIFWdLC2/7vOlH0GNl6But9elNdv1udo1ULenhawfRL0tRN220VqoQXqwlSuylvOFhslLopCg9olJ9j5qlFhL8QTU83yhxfH1ZOeEoD7657V40I9IAKzz1xX9ZR5FTfvD51/EkyX//6CW/xvUCEiv8xeugJqXgSRsYOt+EDUK7hq76lmMrd9GLY7aIcDmXl9GzfSDlUXzfx3V0YG2dhY80aIe/hJqgcOodxskDvK5YTFpQMCo7d3+EJ44LfrDU38Y5Mt8CAt52jc3k8g96HVmJJfmDzyBsYBLfAjtMzxTS1CAdT+NauGZMMm0qm2WKvgw6sl2fpLYtv0gZ3sliBQZ5SurvrxHE2lkdHEoSK8pymHf/9unXA4e/+/xS2Nb0uKiuM2jfAn0162n87HbuFAvDtjd66Zgvm0EE6FY+LqRw/8XDZ942Lqupdoc3mjK9JxsPkeuWRcH4IvcCQHNIU/j4BUR9sDKzmyFdE41NktnW1XLcCrpKObCIUky6ibDsme6los9JarIrW94a3d40mx6MjvUGAyj1LBNom4SqNfpGaW72956WGz/CgQO9y/1C/3D1pOy+6lXaQRRK59fhqpC1HcaleWZsq7Yr4N80/a/aYkC2cqNe4FE2UAVbjmW51mtVsh2JHcC1ENQczmoqCGo93OiTlnjeWiwuX6CYTlw7U1ntR1V7cyvg+y1DnWkNEMtp+Q/Jd2rOXkTdmqyN8sK7ZDyJte25RwqGi8Takm6kujECSnxODdIaVB9cskcajCF6tJOL2xFRO1SOs0agnaK/vtxVN76TcNdoKH0mqU8CnY06EDS5FTcFu/LLzGjnh5cbid7VNb6Xq9TZV+LqTSUFPFrZPbifCPGyBNvXaNxrUR814wq2XhirCZQWevvUPsz9/ZU7WATOOzWtaoDRudu8BrMqGa7akblrS8KHHtgIher1104iXoYSvgsao4OhZ3vjax76ZYj2cnuymdRWcR3tHwQZtm4fgP5sQLvOpLWUcDMqHGUMQm16FpUdClOamJ5O7x83TZWnyAB5/fAbIDOtY7UO5hRPeJa21kApaqAQW7aTqpbTF8QsjWjUrFDzaFjtYNr4ymFnEXNFh7pNV9HxXOVK/+TZc/P1LT6v4saRiWbqMVYW4NhH0ZbZnLZv1sTmXyJBajEyZ1FLcpYuFRPSOHzprZ+lp3DBtodDgpiJpMGpd3kx4x6Fj6ue7ZBjS5DC6DPFCG5hyhhUss17g5XW85/zaiGaaARVQonVJgXK05yoX1vUIFIWnW1i65MoC4cAgRqW6M6hvDvKjt6Pl4Ax1nJVWIl1Gvt81pETVUNJ1YlvyJp4vtHUIf/C1Al6wNYZ7XLJFty0YLwmhn1IXzcJH4HNQPPmIQLopbUwkdQqSxFjXSBbnQnHr+IWtExHrJefhGVxqgw6vNrtRqedboK9kmKO/wpKrocdy67BajPIQFGADJ/bsj9UHc1qGETHE6K4ErcVU3EfQ7OED1eMgQcO74Mg/Ze1QC8H8uZNDW6FyPUrNzpGtYk7w+sF7b3aDtqsk4q+VVtPANFzadjriOJ3x1YX3KTwLxRyKKhlxPUZlGVboXPYY0aOYPD7wFNxp3X/OWThlHOhnzsVFLk/aT2PZ9GkixEsNrNWMP8+eB3QZyG+69np455LeLETyyWeE6pRjXYQsZ27zzVeCukBmoItj7zesXwakfiq+YJS5awxTp2MVm0AMFOl+FDPdyEFsN8bmd0ApLpvD1zvfEt7OZWIdh4j5c4KqhV/a7xKgaaM92kC9KpXX3BXrZU7FDRQt3E/1zdt1gPoT9oqnHYEm/81BRtQN1k1/dQUXckgMwd1m9vcvPVWqYI7vvQlW1CZdWzFBVzPdTEqIzP50tA7pLBcEC3qEDQ866dcxtRM2i5++X8kqs1KkZvC82ZsXQ6bcVFd+0U1oiKJZ2G/DaorMdbrWzz7qAWQ51EK1SY/WIE3DoSmKSEdRSPyHiF8YUBMlK9hervlqMKVhwC8noXu3JjJs/2+oxkUlrK91A3+VCvkQM6Li00N2CgDnUoWv9Bw2u1plvOosKoeM0Wog46IPaklWq+vgI6RjpUX9YE6X6/92AQq7zX4TEgu2TGqGHSXfpM6N68jvYnewvQs9LdaCLME9EdMmKkyMrTViNMWUyojWlXtC3qpiBEB246c1KiaH2zf9pKgwZFdYy+4s0WVegAF27QyZRNtH4z5fUNo4GKimEGgxD/1Yy6iVAHqhbnHTwjJD5q9iCi9f297m5jVgU1miJ99RQON4e6ydEXiTAY5LGNqezO6G3FvPUj7m2o/umTt4GnXQ7mZ9tOcWB5PWyftqhizjzyJE4J6vIQy2DGYOSfhhEzGOdwjMqis+loK13msk2GiSWqiPdk1F99dU5sO/7YzD/VrrT4yoqdjIo6o7W/bHC5WKJmYEbizWBKuZRczXjYAv1Zw/5F9CkOI1RMv+gJmEZFdqiRiKy4CihsqcORivU1nElp/dNeYE5RSXN1f0i+mt5ZkgMQ86gi0pI4F0nO4MfcJFTwT6uuGO0GACme1aAsAyrOIB6JPlPut0NbzKLiiKUdr3mdsDGM7GfRi0NQG83UbyTp4BNMoRbQH0zvIUGfu2DfrafuxiUmqFaRAty+OW9X4WLTzhTAY1PX91BtMi1CNZ2F/ss8g9VR3UlUuBN7pW51VOgsO9PZAlTNHVD1Xj+IY0Q1Fs+6nSUqXGB8/S27E9SJqLUZ9W5enwcHyBJVNvIaAdTyN1DB7tGdhtrTq6Nuh2rTibT49r6u3s2ZlugqlGp+rRiGK5xVAOrVMcrRiFqZM10qa1RcSTW/NItvHWficE7+orECH9QzR67cQdfWRpWHI53gbqzkF1AxmmPekYLvKTa/gAqe/UQ4EKcxrkC9OrFBnJMRtTLlieOzfbdSZiQ61FQ8y8rGKpt7Ow/fwXgI1PWGAHiJTh8kZzJ8I2FlVLjSm/qwxFO04MqoMLWbfEMBDCu8sbMy6vz7fjiP89dHnQiSMxm2OayListIZm91w0MazuqoGF6d3pkKBLfVUXG6Or3MBiX0Ib5uRlmkjXRQLNgViB3PDQFH6Nf1ZAuLmXUXGz1K0FXvxg7m/NUjHEKxF/BHwYDM+Ku7W3+YivyBxiR1DHW0eXldOWnaGR6/tfOZvihHDSrUeWcVN/um6FDxxMpgY9Ggyu+qHcyq/02BbqZBleLU6Tsf0foLAmuwGtRgqsrXEd+AKhYhTx//RMO7YkANeYc6/Ejrb4yo7DsawzudPyAGXeWquj95PyN7bc/5sdFUEor6c2PUIAT1d+uUov6ah6KIgspa/1S6vyV+tyOorPWPP2P5hVBjxd9M/iF7yoUMAYx06QcevyIqKmv9+a8+rCGKAnys9eE7qp8WuVvxHvXnrR9sdx+X/W4wVizgPfttCivUv2tX/c/1/a+gGne9/B4qLv6EmSoYLSKJmTkR35+6Ei8O7kVdO0jcq2lXWGm+m51ACbU+pYpAlC33lLQTxpBa9cprKFDPmfqdAJxZ0q8HAGtJvtaFcTtypbvXoWq2gI13g2Lkj755MKDScBvucKO6IsLJIwWiH9ppbFArLSqi0N21ZlTfjEpjo1pU/x/qd1Fb/+UlwvZpCdUDN/ZBUIM+sVsPFQLi0iu3gHoFT6YjqHC+WA/1Zkat/6GuhUp3+y62qzT/30NtG+JvwnmSiBvfOzWtwW5LnF7JX/00KrwYIgucJ4noA9xJIr5YQrJzf/U/GFnf+kNpVwkAAAAASUVORK5CYII="
        alt=""
      />
    ),
    children: [
      {
        key: "2",
        label: (
          <Link style={{ textDecoration: "none" }} to="/industries/fintech">
            Fintech
          </Link>
        ),
      },
      {
        key: "9",
        label: (
          <Link style={{ textDecoration: "none" }} to="/industries/bsfi">
            BSFI
          </Link>
        ),
      },
      {
        key: "5",
        label: (
          <Link style={{ textDecoration: "none" }} to="/industries/telecom">
            Telecom
          </Link>
        ),
      },
      {
        key: "7",
        label: (
          <Link style={{ textDecoration: "none" }} to="/industries/ecommerce">
            E-commerce
          </Link>
        ),
      },
      {
        key: "3",
        label: (
          <Link style={{ textDecoration: "none" }} to="/industries/healthcare">
            Health Care
          </Link>
        ),
      },
      {
        key: "4",
        label: (
          <Link style={{ textDecoration: "none" }} to="/industries/education">
            Education
          </Link>
        ),
      },

      {
        key: "6",
        label: (
          <Link style={{ textDecoration: "none" }} to="/industries/realEstate">
            Real Estate
          </Link>
        ),
      },

      {
        key: "1",
        label: (
          <Link
            style={{ textDecoration: "none" }}
            to="/industries/manufacturing"
          >
            Manufacturing
          </Link>
        ),
      },

      {
        key: "8",
        label: (
          <Link
            style={{ textDecoration: "none" }}
            to="/industries/travel-hospitality"
          >
            Travel & Hospitality
          </Link>
        ),
      },
    ],
  },
  {
    key: "Technologies",
    label: "Technologies ",
    icon: (
      <img
        style={{ width: "20px", height: "20px" }}
        src="data:image/png;base64,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"
        alt=""
      />
    ),
    children: [
      {
        key: "7",
        label: (
          <Link style={{ textDecoration: "none" }} to="/technology/nodsJs">
            NodeJs
          </Link>
        ),
      },
      {
        key: "4",
        label: (
          <Link style={{ textDecoration: "none" }} to="/technology/laravel">
            Laravel
          </Link>
        ),
      },

      {
        key: "8",
        label: (
          <Link
            style={{ textDecoration: "none" }}
            to="/technology/react-native"
          >
            React Native
          </Link>
        ),
      },
      {
        key: "2",
        label: (
          <Link style={{ textDecoration: "none" }} to="/technology/flutter">
            Flutter
          </Link>
        ),
      },
      {
        key: "6",
        label: (
          <Link style={{ textDecoration: "none" }} to="/technology/nextJs">
            NextJs
          </Link>
        ),
      },
      {
        key: "1",
        label: (
          <Link style={{ textDecoration: "none" }} to="/technology/devOps">
            DeveOps
          </Link>
        ),
      },

      {
        key: "3",
        label: (
          <Link style={{ textDecoration: "none" }} to="/technology/graphSQl">
            GraphSQL
          </Link>
        ),
      },

      {
        key: "5",
        label: (
          <Link style={{ textDecoration: "none" }} to="/technology/postgreSql">
            PostgreSQL
          </Link>
        ),
      },
    ],
  },

  {
    key: "Lets Talk",
    icon: (
      <img
        style={{ width: "20px", height: "20px" }}
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAilBMVEX///8AAAD6+vrs7Oz8/Pz19fXw8PAyMjLz8/PLy8ve3t5CQkLn5+fBwcHk5OT39/eMjIxiYmLZ2dlPT09dXV2qqqqjo6OYmJi7u7t6enpra2s9PT3S0tJwcHB/f39GRkYgICCysrIoKCgUFBQeHh6cnJxMTEyQkJAvLy8VFRVWVlY3NzcLCwt9fX0s3X35AAAPg0lEQVR4nO1dZ3fyOgwuGUCAEAgzEEagbPr//94tpX0recrOoPecPF9b4siWtaW8vdWoUaNGjRo1atSoUaNGjRqVwXOiZq8fp8EDadzpuZHjvfqlCoLfCbNTMu7u7g2E7fKanCZh3Hz1C+aA48bZenS+NFTY7zbJJHWjV7+sObx0ulgqaYNoDWfB/4lIpzMZkon7xegQ+69+dQq8/nS8s6DvgcvoFDuvJkCDXna1pO4H3Wnn1UTI0Q5W25z0PbAfz/+mgI2yUQHkPbGc/j0a+6fCyHsiiV9NEoK7PhdM4KdJsPo7F7I32BdO3xeSv0Gje9CJl/fldbGeZWEQd/pfiNMwOwxW165OrdzX/VeT9/YWqi2X1moaxhKjzGl2gkmi/v1u8mIDPVXIz/OnKdYmPCNKp6ubYo/C0qmQoz2TmtW3ddijW5qeGwy6d9mz1r0SaVAile186xRYGF/pdCN53mVe/MsT0B6IX+ecWLsJTjyQ3MrFC46xI76Bu0k+6efOu8Ln3oKC3puMg3iri3iP+EN4u9eVeh3NtZi+giR7vBZJnWGFurFzFLzAqkg+6ogu+a4yTg0FRsy46NU7K8E5TgpeRIIJv/R9XkKUJWjxJK6LX4aDw/PPfVZSFCnj7dZF6Y6jk3CLjtLSVusv+OvglrbaF3w+iDYtVYrPOcesW6rydzkCr+Ud4BP9FUdiid6/xwXSkvLjKc6MXfRcGqO6LIG7aizilDXkziWdYsSyaKuqYBG3teXcRYeVa4uSpRpcm1VR3RLWdj6YRQaVWsJTxswYFy8A2HjoqfAV1MhYDip6gQmzQPVed8xoxoINuAC7bPus2MfT3oGJOhdqhvcZA/E14a+Y8WkKdGd8HLHYvyYw9EkiPsVdcS4xI6sr8tIECPBdHBYlzhkp86oTfCAuRdr08FOFasJrxvPpYL1aLBarZHCYp2XZqxnWi4VcxWis3TZ/PnzH29DYJyU5HVO0zK0I8w2b9kPenXcycez7UI7Rg4VCAYofK9odv2dN3uv/xiD/6gI42AzPLRUiFDh851mvo8iOliN0XeRMXfLyKWZ73pSJFXmxxpkgb/zgMA3MKoVStEhOedpBxsyK+3tPnb/XH2L4tUOtgZGriUVDPgMLOb1HzinzNfVBWjmQ/fznfhzSQ5IOit208uQSMD/wyocLoTDYaNi0B4O+Y/ph9NHlz3Hd20jMzLi/BxoCGztNMQWTwRqRFfgc/mxrb58ic63LiwN9EZTmldnAyP2DKhnRL62FTRslDviXDbUE6rTVmPvBjshyyJ+729bdIB7i1XfEvx+Hg3oFURpyReO5DP4msSHvU1AiTcDLDO0tFO4LgpALiAltxGB2h4iOUMA8fNaEh25zhbnkxoEi/wPoZfCamgBkHI340h+XUgmsU4hN8TatKCRCpbi1CU4jQSpQVfMGAUPtMpmQxiEh4tuBP7C5ifAWjgV7KmYwBmPCQp2TwLY9EtQG8qPMXW4kRwRC3yH1GoxIa7kH1oH+/KX+lTvwJk5NCXSgRXoV/EOfQmDjSF1vxpnwhOwLZKOl6SEix1ektwnq/vGa5AX5TOhIGyOIYZza1BWGPH4VWf06o/t7Zw2WnLPHuNKSCLNFlCsP4EN9KgzhU7Thp2djsmiTNZK0YRAYXNybaX3Eg6KtjGitB2ejVSM2waXlPKizzWQNvBTCAGmfVpy/NVr1k1OZNKFOkUOl3DWJ7TWB9BZEnz6RqpvubCl8m2O9MdZEcFyos0zsGrg1Q6EFRROlZvfwCzisoE3EDgz+FwIyqThVyGZMJTAUcA8wdYGag4GyZkQP2cGzv4s1KbEJyCYXnqEnaPJLDqgNf6ezKWRBiUnL6WcxrDInOEarcfrhP2v8bQDI3JJ8NsG//0RXakq5s8VwHUrOB23fTd2zkQLpS7OCHwDqfiuxDsX15iykm5o9RebyIPSSmhvSQ/g3oYZcXfAbmaggNcJKo/q/snon7DREidCd2qaGDEe9FFBXyAwFkjqUXaEIarGjSD4g51NtrEA3jw/pigF3RSaeKARKw5hMDGvGa1wUi14qHX4X+M+C7KYIMEooDcsTCJQXLE+Z/0x4RYZiJMrqHQ/IpRat3K0H7tiH7J8IBMqjSSyFjSG3GR4U1movEz6NllqHPCRVRjr6tqq+wZT79yPHXoiTlY4RfBotYg4NMqmVoCHwqjQvIl7XJNyGQPdMKUEi+BgShTAvLz0IJX3vOr8u5VPjnFiChtVRqTCAZN6QKASbJw9CSNshP7HQe9uC3lo2JIvUvvJ+gSPR6M4nYLpCfuhyjb8j1S36GWv37Vg5CLMKSjYF12pPMb47QJnLL660QIHc0uoFTCCE5VMYr1RanFAoUfLItP+XhGm2JoWnbeyCcc4PNI9Vig6WU1CEaQaeKz9zcagtMWyAwjELNskBA5aqs2kC0UxxSAH7K6rGxE3AxoUfOL3DLAfzZyrbFFZJUdQFeHdFWEDcJWteFYHMG0aewFCDMkEI7LYrIS8H/l2RGxPn1iwq2SC7s1YwyJ1sVMEMcChLfUgRGoSKjROnuMVxOSVQ7oFRe+DNLypPHzDUVi8JYGhHcSQdoULcWoyyggKVkROQUVRWRAb+T6/yIyCjFXq2KQ5jWFQMQLXHRBSgTa1y36GBp1fHERDgKsEhnldm04cB9uqMecwlPhnuhH6Pm3faU8XqwiadDtTeBb+fD4LDKnUBwzp6sw3um8pFyIQUHinjWhhAHsO86ADbUGWZQkbX+8CQQpUCR5UQ/3C3qF+P32UrEqUeolAfbqNS6ItnJ9HDzv/QAc4M5hoHWL/VU+iJRQ3NBcXvB6Q3phDq5uoplNhtBGnNAqaT5SpfJRPMKIQdMkoKJYV7FgW7vzp/ydhEv2pgq9Lk9meoDLe0xXlugyTeD/x/GpF7vYP0LxBQ6ulFXRMEidT6WzKj1EKadp4y887vqPPs/72pQ1tm+jAialmZRrRS+n62OI5nQnOkPxmcMo2WhRdGX38bEbXs59p8MdoD71Z15V6e0dBmdilVywomEHzDQiXmBOAmSVIegugfPiCpVnivfPYosGx3hEgRiK+KykoBXJ66LxgXQuYFyDZSyoaAltXZ0ZKeoFt14ySeAJEQzaF8AcSGWhqhISuELqfxUIrIMNYGXltXoNKTRb6rvYkwJkfJc5vEyGV1Q6Ra+8IA3S9KkAGqOZ3MEDuJhK0pFKHhwjAUpW3UkJVGLaucHw8kx4UUCgP3VltaKO0MqlLYgG0+k3YW1rJotYu0VLjCaZzAyaHVfWXgPbWOgrTOVKdpikMbrErrRITRR615Im/R0zcEFQR4U2jxWheKGq3Yl/foVWWBwzQjrcIUtsuoC66+IG/nrmYQUWT2ul+AelzvscsP0aBmNwfgSIAFsVzfsNpP3sT2XsVcfCjrqF4NFE4E8Svx9R84ViBQ4QaTY0QgG3QhvCNXiPeLm9IGb3bifl4jHeY25CVcLKB0IsQ/+ZGYgAdkO9QM1pvdZX/ZbQaGgz8w4JWiKyj4K8qIG1VX90YcGprDmq5rjiEzUCzSo9GopIxylRR8Kuwq4uZ17ieWcQHoJ+hmVEDA20uRT56qZZabcuqLPqmwPFjdSMg+Y4PWLvg7YX8li1QuT7lNSiXbsR1YjAtKpMuoARss7yQvIVNRCEeduooe8O3aVIGiJkEj1QRfgxamV7cJdX8uY6BuAd/OzOQqDNlSyqF+gSqxSRckEs3aB1g/mN0l9NZmJo2SsKrHzAz2zNtPY00bzTV4y0g9/As6t0F5IetfkgFmeOX9WdLlhNCc8j+QZ2t6kCVMh3+gCTdETarSimYgSkW0p8ZhEyiGN8Q7LPnyjAVoMhVKN/PcM2ofo5pDpGkgFJCUMDpCC3cbWm4bYnVzRJtDQADFD0IKyuIDFCjtQj1EvygSCZ43OkKbhmM0PHhJ7jGw+caqAHqXBkX5zlaudma1R+1iSBQNjMFAPGY3sc1B3bh0i1E6z9QE2jOMYF/S3tL3yuCS+lEqP/CKkKjae4imx9hmSTx0iAbimDhwQQWdLIVN6sYG2y9QUuJs8Ji57TePf6AbmumgjJB9dB0NizIqdkpzkqhjO2QgUiPdIuBxVyZmQ0QcKyGBJlqO22xzJZyR0GiZeOBRHjv8pn52E4Uv6bMiREATbuizyb4QyD5JqYfGhEL66JJzNDoumaHOLHjCH6h6aRXQXKw878SDscIMWT4UfByOALUBhYMJmtEnBPTQ84y7DU4WX1tXVjyjBG7DqmCXRYYeaPwZotjcTlXyHfNRpiJqPjxsZxKHawCEmqHfLNST3HEcQTBX1QI+1t7mXyPwMtr4um8o1S5TZ1ZQCpapKLEQXu2MLnLGKiZhqiELK4ZgLGkr3g9ok6UaFxWPMi9S3CefPMYEs9q6KE0IclX5vdgQj9NQT8swQ5sxTyy5ozfRXcizSvgzLLottA4iZu6RtcvZmY0UI6ZWKl00wSe4L7jCkw3Z29tKUXyQhPdboSryzJZcF/4BlIxZYJHnC7l+eBozHuRyrbZO2HLkEso72W48yshtBaJeMP24bm7n8617Taap+mkRG/tJyvgQEfcdySK+6OT5PuFde6zpV9j3yDDYfbxXVc3NxUSGJRVZ899zruZDlhlbBnEtr2WFI/FYfm2ey0V8zBL2ZnC4YG+r7CLSgFMtOUWcDnwSNCnzO9k+Pxg9l5qigG/hPhtVTxgh4OeLfJT/kd6MW7SxKuc2NgVZ81MVXyEOBL7eqXhWbQqyH5eKPhAaCwKhy0mx18MLBcar0rUqFG1RyH6jmnZpirnIX5ZW45YAT5g/20yKcUn9uTB2NSgk6kRGKEwudYVzj83gZOLYXOXf6PUlyewkyHUhU0nT5rhMrSuBl4lzhPfr1Pa+uBn3Tdon9rOy1bwYnE/zD4uJOZG9LJElcoQDsSuBN5eWU15Gp9QlC9dmPB1LA3G76WsO8AlVTXNjuZqm+pfz4kmiyjQOq2gtUqGvybycV9Mw7rcFx+n34nCSaIpqjyV9GtoETqjN9b63juPVejbN5uED82wyG6yGx5s2QtzSzW2pCF5mn89W4Xz4G/Q94Jhll0joHqrseNfDnxd7jjvbNqEyESd5K6F+sF9U2OtuhP6B9ukSNVqDuAo31xJesLYrv/jBdhX+resngB+sba/kcjWvfAKTHZrBzJxdW4PwDwoXBdrBaUhl2N14MP9/UfcNx02z9bWlak28nEfJJOi90rTOj6gfzKeDZLi5bX+SuPf31ma8GhyyoPPnxQodnhNFTfeJZhTlGbFXo0aNGjVq1KhRo0aNGjVqmOM/mR/XSTr0rLMAAAAASUVORK5CYII="
        alt=""
      />
    ),
    label: (
      <Link style={{ textDecoration: "none" }} to="/lets_talk">
        Lets talk
      </Link>
    ),
  },
];
const MenuBar = () => {
  const [open, setOpen] = useState(false);
  const isMd = useMediaQuery("(max-width:768px)");

  const showDrawer = () => {
    setOpen(!open);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      {!open && (
        <Space
          style={{
            position: "fixed",
            top: "10px",
            left: "10px",
            zIndex: "10000",
            backgroundColor: "#fff",
            borderRadius: "30px",
            boxShadow: "rgb(99, 97, 90) 0px 0px 1px 0px",
            padding: ".2rem",
          }}
          onClick={showDrawer}
        >
          <MenuIcon
            style={{
              fontSize: "30px",
              color: "#000",
              zIndex: "10000",
            }}
          />
        </Space>
      )}

      <Drawer
        style={{
          padding: 0,
          width: isMd && "80%",
        }}
        title={
          <a href="/">
            <img
              src={hsbLogo}
              alt="HSB Logo"
              style={{ width: "60%", height: "40px" }}
            />
          </a>
        }
        placement={"left"}
        closable={false}
        onClose={onClose}
        open={open}
      >
        <Menu
          style={{
            width: "100%",
            border: "none",
            background: "transparent",
          }}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          items={items}
        />
      </Drawer>
    </>
  );
};

export default MenuBar;
