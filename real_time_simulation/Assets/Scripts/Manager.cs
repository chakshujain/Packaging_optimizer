using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class Manager : MonoBehaviour
{
    public GameObject ball;
    public float ballRadius = 1f;
    public TMP_InputField forceField;
    public TMP_InputField horizontalBiscuits;
    public TMP_InputField verticleBiscuits;

    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    public void PrintHello()
    {
        print(forceField.text);
    }

}
