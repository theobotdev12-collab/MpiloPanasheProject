import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, User, Bell, Moon, Shield, Info, ChevronRight, Edit2 } from "lucide-react";

const Profile = () => {
  const [name, setName] = useState("Alex Johnson");
  const [editing, setEditing] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [ckdStage, setCkdStage] = useState("stage-2");
  const [diet, setDiet] = useState("low-sodium");

  const toggleDarkMode = (val: boolean) => {
    setDarkMode(val);
    document.documentElement.classList.toggle("dark", val);
  };

  return (
    <div className="space-y-6 pb-4">
      <h1 className="font-display text-2xl font-bold text-foreground">Profile</h1>

      {/* Avatar & Name */}
      <div className="flex flex-col items-center">
        <div className="mb-3 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-emerald-glow">
          <User className="h-10 w-10 text-primary-foreground" />
        </div>
        {editing ? (
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => setEditing(false)}
            onKeyDown={(e) => e.key === "Enter" && setEditing(false)}
            className="max-w-[200px] text-center font-semibold"
            autoFocus
          />
        ) : (
          <button onClick={() => setEditing(true)} className="flex items-center gap-2">
            <h2 className="font-display text-xl font-bold text-foreground">{name}</h2>
            <Edit2 className="h-4 w-4 text-muted-foreground" />
          </button>
        )}
        <p className="text-sm text-muted-foreground">Kidney Health Enthusiast</p>
      </div>

      {/* Health Preferences */}
      <div>
        <h3 className="mb-3 font-display text-lg font-semibold text-foreground flex items-center gap-2">
          <Heart className="h-5 w-5 text-primary" /> Health Preferences
        </h3>
        <Card className="border-0 shadow-sm">
          <CardContent className="space-y-4 p-4">
            <div>
              <label className="text-sm font-medium text-foreground">CKD Stage</label>
              <Select value={ckdStage} onValueChange={setCkdStage}>
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">Not diagnosed</SelectItem>
                  <SelectItem value="stage-1">Stage 1</SelectItem>
                  <SelectItem value="stage-2">Stage 2</SelectItem>
                  <SelectItem value="stage-3">Stage 3</SelectItem>
                  <SelectItem value="stage-4">Stage 4</SelectItem>
                  <SelectItem value="stage-5">Stage 5</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">Dietary Preference</label>
              <Select value={diet} onValueChange={setDiet}>
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low-sodium">Low Sodium</SelectItem>
                  <SelectItem value="low-potassium">Low Potassium</SelectItem>
                  <SelectItem value="low-phosphorus">Low Phosphorus</SelectItem>
                  <SelectItem value="diabetic-friendly">Diabetic Friendly</SelectItem>
                  <SelectItem value="general">General Kidney Diet</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Settings */}
      <div>
        <h3 className="mb-3 font-display text-lg font-semibold text-foreground flex items-center gap-2">
          <Shield className="h-5 w-5 text-primary" /> Settings
        </h3>
        <Card className="border-0 shadow-sm">
          <CardContent className="divide-y p-0">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <Bell className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">Notifications</span>
              </div>
              <Switch checked={notifications} onCheckedChange={setNotifications} />
            </div>
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <Moon className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">Dark Mode</span>
              </div>
              <Switch checked={darkMode} onCheckedChange={toggleDarkMode} />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* App Info */}
      <div>
        <h3 className="mb-3 font-display text-lg font-semibold text-foreground flex items-center gap-2">
          <Info className="h-5 w-5 text-primary" /> About
        </h3>
        <Card className="border-0 shadow-sm">
          <CardContent className="divide-y p-0">
            {[
              { label: "Version", value: "1.0.0 (Prototype)" },
              { label: "Help & Support", value: "" },
              { label: "Privacy Policy", value: "" },
              { label: "Terms of Service", value: "" },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between p-4">
                <span className="text-sm text-foreground">{item.label}</span>
                {item.value ? (
                  <span className="text-sm text-muted-foreground">{item.value}</span>
                ) : (
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
